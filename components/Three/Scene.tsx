"use client";
import { useFrame } from "@react-three/fiber";
import { ContactShadows, Float, Sparkles, Stage } from "@react-three/drei";
import Phone from "./Phone";
import { forwardRef } from "react";

const Scene = forwardRef(function Scene() {
  useFrame((state) => {});

  return (
    <group>
      <Stage environment="dawn" preset="portrait" intensity={3}>
        <Sparkles
          count={30}
          position={[-0.5, 2, -1.3]}
          scale={[6, 5, 2]}
          size={1.9}
          color="#eef4fc"
        />

        <ambientLight intensity={0.2} />
        <hemisphereLight
          intensity={0.1}
          groundColor="#657bbd"
          color="#ffcc00"
        />
        <directionalLight
          intensity={0.3}
          color="#e9e1d1"
          position={[3, 11, 13]}
        />
        <Float floatIntensity={0.8} rotationIntensity={0.5}>
          <Phone />
        </Float>

        <ContactShadows
          opacity={0.8}
          scale={14}
          blur={1}
          far={8}
          resolution={256}
          color="#1a1a1a"
        />
      </Stage>
    </group>
  );
});

export default Scene;
