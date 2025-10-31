"use client";

import { useEffect, useRef, useState } from "react";
import { Color, Scene, Fog, PerspectiveCamera, Vector3, SRGBColorSpace } from "three";
import ThreeGlobe from "three-globe";
import { useThree, Canvas, extend } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as topojson from "topojson-client";

extend({ ThreeGlobe });

const aspect = 1.2;
const cameraZ = 300;

// 🌍 Arc type
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
  directionalLight?: string;
  pointLight?: string;
  arcTime?: number;
  arcLength?: number;
  autoRotate?: boolean;
  autoRotateSpeed?: number;
};

interface WorldProps {
  globeConfig: GlobeConfig;
  data: Position[];
}

// 🎨 Random color helper
const randomColor = () => {
  const colors = ["#00ffff", "#00ff00", "#ffff00"]; // cyan, green, yellow
  return colors[Math.floor(Math.random() * colors.length)];
};

function Globe({ globeConfig, data }: WorldProps) {
  const globeRef = useRef<ThreeGlobe | null>(null);

  const defaultProps = {
    pointSize: 1.2,
    atmosphereColor: "#a4d9ff",
    showAtmosphere: true,
    atmosphereAltitude: 0.12,
    polygonColor: "rgba(180,180,180,0.8)",
    globeColor: "#1e78d8",
    emissive: "#001133",
    emissiveIntensity: 0.3,
    shininess: 0.8,
    arcTime: 3000,
    arcLength: 0.7,
    ...globeConfig,
  };

  const buildMaterial = () => {
    if (!globeRef.current) return;
    const mat = globeRef.current.globeMaterial() as any;
    mat.color = new Color(defaultProps.globeColor);
    mat.emissive = new Color(defaultProps.emissive);
    mat.emissiveIntensity = defaultProps.emissiveIntensity;
    mat.shininess = defaultProps.shininess;
  };

  const startAnimation = (globeData: Position[]) => {
    if (!globeRef.current || !globeData.length) return;

    (globeRef.current as any)
      .arcsData(globeData)
      .arcStartLat((d: Position) => d.startLat)
      .arcStartLng((d: Position) => d.startLng)
      .arcEndLat((d: Position) => d.endLat)
      .arcEndLng((d: Position) => d.endLng)
      .arcColor(() => randomColor())
      .arcAltitude(() => Math.random() * 0.25 + 0.05)
      .arcStroke(() => 0.25 + Math.random() * 0.1)
      .arcDashLength(defaultProps.arcLength)
      .arcDashGap(2)
      .arcDashAnimateTime(() => defaultProps.arcTime + Math.random() * 2000);

    (globeRef.current as any)
      .pointsData(globeData)
      .pointColor(() => "#ffffff")
      .pointsMerge(true)
      .pointAltitude(0)
      .pointRadius(defaultProps.pointSize);
  };

  useEffect(() => {
    if (!globeRef.current) return;

    buildMaterial();

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

        // 💫 Initial animation
        startAnimation(data);

        // 🔁 Random refresh loop for GitHub-style motion
        const interval = setInterval(() => {
          const shuffled = [...data].sort(() => Math.random() - 0.5);
          startAnimation(shuffled);
        }, 4000);

        return () => clearInterval(interval);
      });
  }, [data]);

  return <primitive ref={globeRef} object={new ThreeGlobe()} />;
}

// 🧩 Renderer setup
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

// 🌐 Full Scene
export function World(props: WorldProps) {
  const { globeConfig } = props;
  const scene = new Scene();
  scene.fog = new Fog(0x000000, 400, 2000);

  // Example default connections (for testing)
  const exampleData = [
    { order: 1, startLat: 25.2, startLng: 55.3, endLat: 51.5, endLng: -0.1, arcAlt: 0.2, color: "#00ff00" },
    { order: 2, startLat: 40.7, startLng: -74.0, endLat: 35.6, endLng: 139.7, arcAlt: 0.3, color: "#ffff00" },
    { order: 3, startLat: -33.9, startLng: 151.2, endLat: 48.8, endLng: 2.3, arcAlt: 0.25, color: "#00ffff" },
  ];

  return (
    <Canvas scene={scene} camera={new PerspectiveCamera(50, aspect, 180, 1800)}>
      <WebGLRendererConfig />
      <ambientLight intensity={1.3} />
      <directionalLight color={"#ffffff"} position={new Vector3(-400, 200, 300)} intensity={1.8} />
      <pointLight color={"#00aaff"} position={new Vector3(200, 400, 200)} intensity={1.2} />
      <Globe {...props} data={props.data.length ? props.data : exampleData} />
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
