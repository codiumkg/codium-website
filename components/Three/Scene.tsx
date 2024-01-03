"use client";

import { ContactShadows, Sparkles, Stage } from "@react-three/drei";
import Phone from "./Phone";
import { forwardRef } from "react";

const Scene = forwardRef(function Scene() {
  return (
    <group>
      <Stage environment="lobby" preset="portrait" intensity={3}>
        <Sparkles
          count={24}
          position={[-0.5, 2, -1.3]}
          scale={[6, 5, 2]}
          size={1.9}
          color="#eef4fc"
        />

        <Phone />

        <ContactShadows
          opacity={0.8}
          scale={14}
          blur={1}
          far={8}
          resolution={128}
          color="#1a1a1a"
        />
      </Stage>
    </group>
  );
});

export default Scene;
