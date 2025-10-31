"use client";

import { useEffect, useRef, useState } from "react";
import { Color, Scene, Fog, PerspectiveCamera, Vector3 } from "three";
import ThreeGlobe from "three-globe";
import { useThree, Canvas, extend } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as topojson from "topojson-client";
import { cn } from "@/lib/utils";

extend({ ThreeGlobe }); // ✅ still needed


const RING_PROPAGATION_SPEED = 3;
const aspect = 1.2;
const cameraZ = 300;

// 🌍 Type definitions
type Position = {
  order: number;
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  arcAlt: number;
  color: string;
};

export type GlobeConfig = {
  pointSize?: number;
  globeColor?: string;
  showAtmosphere?: boolean;
  atmosphereColor?: string;
  atmosphereAltitude?: number;
  emissive?: string;
  emissiveIntensity?: number;
  shininess?: number;
  polygonColor?: string;
  ambientLight?: string;
  directionalLeftLight?: string;
  directionalTopLight?: string;
  pointLight?: string;
  arcTime?: number;
  arcLength?: number;
  rings?: number;
  maxRings?: number;
  initialPosition?: { lat: number; lng: number };
  autoRotate?: boolean;
  autoRotateSpeed?: number;
};

interface WorldProps {
  globeConfig: GlobeConfig;
  data: Position[];
}

let numbersOfRings = [0];

function Globe({ globeConfig, data }: WorldProps) {
  const [globeData, setGlobeData] = useState<
    {
      size: number;
      order: number;
      color: (t: number) => string;
      lat: number;
      lng: number;
    }[]
  >([]);
  const globeRef = useRef<ThreeGlobe | null>(null);

  const defaultProps = {
    pointSize: 1,
    atmosphereColor: "#ffffff",
    showAtmosphere: true,
    atmosphereAltitude: 0.1,
    polygonColor: "rgba(255,255,255,0.7)",
    globeColor: "#1d072e",
    emissive: "#000000",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    arcTime: 2000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    ...globeConfig,
  };

  useEffect(() => {
    if (!globeRef.current) return;
    buildData();
    buildMaterial();
  }, [data]);

  const buildMaterial = () => {
    if (!globeRef.current) return;
    const globeMaterial = globeRef.current.globeMaterial() as any;
    globeMaterial.color = new Color(defaultProps.globeColor);
    globeMaterial.emissive = new Color(defaultProps.emissive);
    globeMaterial.emissiveIntensity = defaultProps.emissiveIntensity;
    globeMaterial.shininess = defaultProps.shininess;
  };

  const buildData = () => {
    const points = data.flatMap((arc) => {
      if (
        [arc.startLat, arc.startLng, arc.endLat, arc.endLng].some(
          (v) => typeof v !== "number" || isNaN(v)
        )
      ) {
        console.warn("Skipping invalid arc:", arc);
        return [];
      }
      const rgb = hexToRgb(arc.color);
      if (!rgb) return [];
      const colorFn = (t: number) =>
        `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${1 - t})`;
      return [
        {
          size: defaultProps.pointSize,
          order: arc.order,
          color: colorFn,
          lat: arc.startLat,
          lng: arc.startLng,
        },
        {
          size: defaultProps.pointSize,
          order: arc.order,
          color: colorFn,
          lat: arc.endLat,
          lng: arc.endLng,
        },
      ];
    });

    const uniquePoints = points.filter(
      (v, i, a) =>
        a.findIndex((v2) => v2.lat === v.lat && v2.lng === v.lng) === i
    );
    setGlobeData(uniquePoints);
  };

  useEffect(() => {
    if (!globeRef.current || !globeData.length) return;
    fetch("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json")
      .then((res) => res.json())
      .then((worldData) => {
        const countries = topojson.feature(
          worldData,
          worldData.objects.countries
        ) as any;

        const validFeatures = countries.features.filter(
          (f: any) =>
            f?.geometry?.coordinates &&
            Array.isArray(f.geometry.coordinates)
        );

        (globeRef.current as any)
          .polygonsData(validFeatures)
          .polygonCapColor(() => defaultProps.polygonColor)
          .polygonSideColor(() => "rgba(0,0,0,0.1)")
          .polygonStrokeColor(() => "rgba(255,255,255,0.1)")
          .polygonAltitude(0.01)
          .showAtmosphere(defaultProps.showAtmosphere)
          .atmosphereColor(defaultProps.atmosphereColor)
          .atmosphereAltitude(defaultProps.atmosphereAltitude);

        startAnimation();
      })
      .catch((err) => {
        console.error("Error loading world data:", err);
        startAnimation();
      });
  }, [globeData]);

  const startAnimation = () => {
    if (!globeRef.current) return;

    const validData: Position[] = data.filter(
      (d): d is Position =>
        typeof d.startLat === "number" &&
        typeof d.startLng === "number" &&
        typeof d.endLat === "number" &&
        typeof d.endLng === "number"
    );

    // 🌍 Build arcs
    (globeRef.current as any)
      .arcsData(validData)
      .arcStartLat((d: Position) => d.startLat)
      .arcStartLng((d: Position) => d.startLng)
      .arcEndLat((d: Position) => d.endLat)
      .arcEndLng((d: Position) => d.endLng)
      .arcColor((d: Position) => d.color)
      .arcAltitude((d: Position) => d.arcAlt || 0.1)
      .arcStroke(() => [0.32, 0.28, 0.3][Math.floor(Math.random() * 3)])
      .arcDashLength(defaultProps.arcLength)
      .arcDashGap(15)
      .arcDashAnimateTime(() => defaultProps.arcTime);

    // ✴️ Build points
    (globeRef.current as any)
      .pointsData(validData)
      .pointColor((d: Position) => d.color)
      .pointsMerge(true)
      .pointAltitude(0)
      .pointRadius(defaultProps.pointSize);

    // 🔄 Build rings
    const activeRings = globeData.filter((_, i) => numbersOfRings.includes(i));
    (globeRef.current as any)
      .ringsData(activeRings)
      .ringColor((t: number) =>
        activeRings[Math.floor(t * (activeRings.length - 1))].color(t)
      )
      .ringMaxRadius(defaultProps.maxRings)
      .ringPropagationSpeed(RING_PROPAGATION_SPEED)
      .ringRepeatPeriod(
        (defaultProps.arcTime * defaultProps.arcLength) / defaultProps.rings
      );
  };

  useEffect(() => {
    if (!globeRef.current || !globeData.length) return;
    const interval = setInterval(() => {
      numbersOfRings = genRandomNumbers(
        0,
        data.length,
        Math.floor((data.length * 4) / 5)
      );
      (globeRef.current as any).ringsData(
        globeData.filter((_, i) => numbersOfRings.includes(i))
      );
    }, 2000);
    return () => clearInterval(interval);
  }, [globeRef.current, globeData]);

return <primitive ref={globeRef} object={new ThreeGlobe()} />;
}

export function WebGLRendererConfig() {
  const { gl, size } = useThree();
  useEffect(() => {
    gl.setPixelRatio(window.devicePixelRatio);
    gl.setSize(size.width, size.height);
    gl.setClearColor(0xffaaff, 0);
  }, []);
  return null;
}

export function World(props: WorldProps) {
  const { globeConfig } = props;
  const scene = new Scene();
  scene.fog = new Fog(0xffffff, 400, 2000);

  return (
    <Canvas scene={scene} camera={new PerspectiveCamera(50, aspect, 180, 1800)}>
      <WebGLRendererConfig />
      <ambientLight color={globeConfig.ambientLight} intensity={1.2} />
      <directionalLight
        color={globeConfig.directionalLeftLight}
        position={new Vector3(-400, 100, 400)}
        intensity={1.5}
      />
      <directionalLight
        color={globeConfig.directionalTopLight}
        position={new Vector3(-200, 500, 200)}
        intensity={1.5}
      />
      <pointLight
        color={globeConfig.pointLight}
        position={new Vector3(-200, 500, 200)}
        intensity={1.2}
      />
      <Globe {...props} />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minDistance={cameraZ}
        maxDistance={cameraZ}
        autoRotate
        autoRotateSpeed={1}
        minPolarAngle={Math.PI / 3.5}
        maxPolarAngle={Math.PI - Math.PI / 3}
      />
    </Canvas>
  );
}

// 🎨 Helpers
export function hexToRgb(hex: string) {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

export function genRandomNumbers(min: number, max: number, count: number) {
  const arr: number[] = [];
  while (arr.length < count) {
    const r = Math.floor(Math.random() * (max - min)) + min;
    if (!arr.includes(r)) arr.push(r);
  }
  return arr;
}
