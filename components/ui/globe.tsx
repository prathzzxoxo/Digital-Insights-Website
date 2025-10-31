"use client";

import { useEffect, useRef, useState } from "react";
import { Color, Scene, Fog, PerspectiveCamera, Vector3, SRGBColorSpace } from "three";
import ThreeGlobe from "three-globe";
import { useThree, Canvas, extend } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as topojson from "topojson-client";

extend({ ThreeGlobe });

const RING_PROPAGATION_SPEED = 3;
const aspect = 1.2;
const cameraZ = 300;

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
  autoRotate?: boolean;
  autoRotateSpeed?: number;
};

interface WorldProps {
  globeConfig: GlobeConfig;
  data: Position[];
}

let numbersOfRings: number[] = [0];

function Globe({ globeConfig, data }: WorldProps) {
  const [globeData, setGlobeData] = useState<any[]>([]);
  const globeRef = useRef<ThreeGlobe | null>(null);

  const defaultProps = {
    pointSize: 1,
    atmosphereColor: "#ff4b4b", // 🔴 red tone for cybersecurity
    showAtmosphere: true,
    atmosphereAltitude: 0.15,
    polygonColor: "rgba(255,255,255,0.1)",
    globeColor: "#0a0a0a",
    emissive: "#ff0000",
    emissiveIntensity: 0.4,
    shininess: 0.8,
    arcTime: 2000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    ...globeConfig,
  };

  // 🌍 Build material + base color
  const buildMaterial = () => {
    if (!globeRef.current) return;
    const globeMaterial = globeRef.current.globeMaterial() as any;
    globeMaterial.color = new Color(defaultProps.globeColor);
    globeMaterial.emissive = new Color(defaultProps.emissive);
    globeMaterial.emissiveIntensity = defaultProps.emissiveIntensity;
    globeMaterial.shininess = defaultProps.shininess;
  };

  // 🧩 Convert incoming arc data into points
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
        { size: defaultProps.pointSize, order: arc.order, color: colorFn, lat: arc.startLat, lng: arc.startLng },
        { size: defaultProps.pointSize, order: arc.order, color: colorFn, lat: arc.endLat, lng: arc.endLng },
      ];
    });

    const uniquePoints = points.filter(
      (v, i, a) => a.findIndex((v2) => v2.lat === v.lat && v2.lng === v.lng) === i
    );
    setGlobeData(uniquePoints);
  };

  // 🌐 Build arcs and animations
  const startAnimation = () => {
    if (!globeRef.current) return;

    const validData = data.filter(
      (d) =>
        typeof d.startLat === "number" &&
        typeof d.startLng === "number" &&
        typeof d.endLat === "number" &&
        typeof d.endLng === "number"
    );

    // ✈️ Animated arcs
    (globeRef.current as any)
      .arcsData(validData)
      .arcStartLat((d: Position) => d.startLat)
      .arcStartLng((d: Position) => d.startLng)
      .arcEndLat((d: Position) => d.endLat)
      .arcEndLng((d: Position) => d.endLng)
      .arcColor(() => ["#ff0000", "#ffffff"]) // red-white trail
      .arcAltitude((d: Position) => d.arcAlt || 0.1)
      .arcDashLength(defaultProps.arcLength)
      .arcDashGap(4)
      .arcDashAnimateTime(() => defaultProps.arcTime);

    // ✴️ Points
    (globeRef.current as any)
      .pointsData(validData)
      .pointColor(() => "#ff4b4b")
      .pointsMerge(true)
      .pointAltitude(0)
      .pointRadius(defaultProps.pointSize);

    // 🔄 Rings
    const activeRings = globeData.filter((_, i) => numbersOfRings.includes(i));
    (globeRef.current as any)
      .ringsData(activeRings)
      .ringColor((t: number) => `rgba(255, 0, 0, ${1 - t})`)
      .ringMaxRadius(defaultProps.maxRings)
      .ringPropagationSpeed(RING_PROPAGATION_SPEED)
      .ringRepeatPeriod(
        (defaultProps.arcTime * defaultProps.arcLength) / defaultProps.rings
      );
  };

  // 🌍 Load world data
  useEffect(() => {
    if (!globeRef.current || !data.length) return;
    buildData();
    buildMaterial();

    fetch("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json")
      .then((res) => res.json())
      .then((worldData) => {
        const countries = topojson.feature(worldData, worldData.objects.countries) as any;
        const validFeatures = countries.features.filter(
          (f: any) =>
            f?.geometry?.coordinates && Array.isArray(f.geometry.coordinates)
        );

        (globeRef.current as any)
          .polygonsData(validFeatures)
          .polygonCapColor(() => defaultProps.polygonColor)
          .polygonSideColor(() => "rgba(255,0,0,0.1)")
          .polygonStrokeColor(() => "rgba(255,255,255,0.05)")
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
  }, [data]);

  // 🔁 Rings pulse loop
  useEffect(() => {
    if (!globeRef.current || !globeData.length) return;
    const interval = setInterval(() => {
      numbersOfRings = genRandomNumbers(0, data.length, Math.floor((data.length * 4) / 5));
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
    gl.outputColorSpace = SRGBColorSpace;
    gl.setPixelRatio(window.devicePixelRatio);
    gl.setSize(size.width, size.height);
    gl.setClearColor(0x000000, 1);
  }, []);
  return null;
}

export function World(props: WorldProps) {
  const { globeConfig } = props;
  const scene = new Scene();
  scene.fog = new Fog(0x000000, 400, 2000);

  return (
    <Canvas scene={scene} camera={new PerspectiveCamera(50, aspect, 180, 1800)}>
      <WebGLRendererConfig />
      <ambientLight color={globeConfig.ambientLight || "#ffffff"} intensity={1.5} />
      <directionalLight color={"#ff4b4b"} position={new Vector3(-400, 100, 400)} intensity={2} />
      <directionalLight color={"#ffffff"} position={new Vector3(-200, 500, 200)} intensity={1.8} />
      <pointLight color={"#ff0000"} position={new Vector3(-200, 500, 200)} intensity={1.2} />
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
