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

function randomColor() {
  const colors = ["#00ffff", "#00ff00", "#ffff00"]; // blue, green, yellow
  return colors[Math.floor(Math.random() * colors.length)];
}

function randomDelay() {
  return 500 + Math.random() * 3000;
}

let numbersOfRings: number[] = [0];

function Globe({ globeConfig, data }: WorldProps) {
  const [globeData, setGlobeData] = useState<any[]>([]);
  const globeRef = useRef<ThreeGlobe | null>(null);

  const defaultProps = {
    pointSize: 1,
    atmosphereColor: "#ffffff",
    showAtmosphere: true,
    atmosphereAltitude: 0.12,
    polygonColor: "rgba(255,255,255,0.15)",
    globeColor: "#1e78d8", // 🌍 based on your uploaded image (soft light-blue)
    emissive: "#001133",
    emissiveIntensity: 0.3,
    shininess: 0.9,
    arcTime: 3000,
    arcLength: 0.7,
    rings: 1,
    maxRings: 3,
    ...globeConfig,
  };

  // 🧩 Build valid arc data
  const buildData = () => {
    const validData = data.filter(
      (d) =>
        typeof d.startLat === "number" &&
        typeof d.startLng === "number" &&
        typeof d.endLat === "number" &&
        typeof d.endLng === "number"
    );

    setGlobeData(validData);
  };

  // 🪄 Randomly trigger arcs (GitHub-style smooth randomness)
  const startAnimation = () => {
    if (!globeRef.current) return;

    (globeRef.current as any)
      .arcsData(globeData)
      .arcStartLat((d: Position) => d.startLat)
      .arcStartLng((d: Position) => d.startLng)
      .arcEndLat((d: Position) => d.endLat)
      .arcEndLng((d: Position) => d.endLng)
      .arcColor(() => randomColor())
      .arcAltitude(() => Math.random() * 0.25 + 0.05)
      .arcStroke(() => 0.2 + Math.random() * 0.1)
      .arcDashLength(defaultProps.arcLength)
      .arcDashGap(2)
      .arcDashAnimateTime(() => defaultProps.arcTime + Math.random() * 1500);

    // 🌐 Points
    (globeRef.current as any)
      .pointsData(globeData)
      .pointColor(() => "#fff")
      .pointsMerge(true)
      .pointAltitude(0)
      .pointRadius(defaultProps.pointSize);

    // ✴️ Optional rings for pulse effect
    (globeRef.current as any)
      .ringsData([])
      .ringColor(() => "rgba(0,255,255,0.3)")
      .ringMaxRadius(defaultProps.maxRings)
      .ringPropagationSpeed(RING_PROPAGATION_SPEED);
  };

  // 🌍 Fetch and render globe polygons
  useEffect(() => {
    if (!globeRef.current) return;

    buildData();

    fetch("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json")
      .then((res) => res.json())
      .then((worldData) => {
        const countries = topojson.feature(worldData, worldData.objects.countries) as any;
        const validFeatures = countries.features.filter(
          (f: any) => f?.geometry?.coordinates && Array.isArray(f.geometry.coordinates)
        );

        (globeRef.current as any)
          .polygonsData(validFeatures)
          .polygonCapColor(() => defaultProps.polygonColor)
          .polygonSideColor(() => "rgba(0,0,0,0.15)")
          .polygonStrokeColor(() => "rgba(255,255,255,0.05)")
          .polygonAltitude(0.01)
          .showAtmosphere(defaultProps.showAtmosphere)
          .atmosphereColor(defaultProps.atmosphereColor)
          .atmosphereAltitude(defaultProps.atmosphereAltitude);

        startAnimation();

        // ⏱️ Random update loop to mimic GitHub-style flow
        const interval = setInterval(() => {
          if (!globeRef.current) return;
          (globeRef.current as any)
            .arcsData(globeData.sort(() => Math.random() - 0.5))
            .arcColor(() => randomColor())
            .arcDashAnimateTime(() => defaultProps.arcTime + randomDelay());
        }, 4000);

        return () => clearInterval(interval);
      });
  }, [data]);

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
      <ambientLight intensity={1.3} />
      <directionalLight color={"#ffffff"} position={new Vector3(-400, 200, 300)} intensity={1.8} />
      <pointLight color={"#00aaff"} position={new Vector3(200, 400, 200)} intensity={1.2} />
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
