"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line, MeshTransmissionMaterial, OrbitControls } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function LoopObject() {
  const group = useRef<THREE.Group>(null);
  const points = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    const segments = 180;
    for (let i = 0; i <= segments; i++) {
      const t = (i / segments) * Math.PI * 2;
      const x = Math.sin(t) * (1.85 + 0.38 * Math.cos(2 * t));
      const y = Math.sin(2 * t) * 0.72;
      const z = Math.cos(t) * 0.5;
      pts.push(new THREE.Vector3(x, y, z));
    }
    return pts;
  }, []);

  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.12;
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.35) * 0.12;
  });

  return (
    <group ref={group} rotation={[0.12, 0, -0.12]}>
      <Line points={points} color="#21923e" lineWidth={2.2} transparent opacity={0.9} />
      <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.25}>
        <mesh scale={0.62} position={[0, 0, 0]}>
          <icosahedronGeometry args={[1, 3]} />
          <MeshTransmissionMaterial
            backside
            thickness={0.45}
            roughness={0.16}
            transmission={0.7}
            ior={1.2}
            chromaticAberration={0.03}
            anisotropy={0.1}
            color="#d7f2dd"
          />
        </mesh>
      </Float>
    </group>
  );
}

function Scene() {
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0.1, 6.2], fov: 42 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <ambientLight intensity={0.7} />
      <pointLight position={[3, 3, 4]} intensity={18} distance={12} />
      <pointLight position={[-3, -2, 2]} intensity={8} distance={10} color="#21923e" />
      <LoopObject />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
    </Canvas>
  );
}

export function HeroVisual() {
  return (
    <div className="hero-visual" aria-hidden="true">
      <div className="hero-webgl"><Scene /></div>
      <div className="hero-grid" />
      <div className="hero-orbit hero-orbit--one" />
      <div className="hero-orbit hero-orbit--two" />
      <span className="hero-node hero-node--one" />
      <span className="hero-node hero-node--two" />
      <div className="hero-system-label">SYSTEM / 01 — CONTINUOUS LOOP</div>
    </div>
  );
}
