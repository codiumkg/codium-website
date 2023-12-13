"use client";

import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader.js";

import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";

export default function Phone() {
  const objRef = useRef<Mesh>(null);

  const materials = useLoader(MTLLoader, "models/IPHONE13.mtl");
  const obj = useLoader(OBJLoader, "models/IPHONE13.obj", (loader) => {
    materials.preload();
    loader.setMaterials(materials);
  });

  obj.children.forEach((child) => {
    child.receiveShadow = true;
    child.castShadow = true;
  });

  useFrame(({ clock }) => {
    if (objRef.current) {
      objRef.current.rotation.y -= Math.sin(clock.elapsedTime) * 0.0023;
      objRef.current.rotation.z -= Math.sin(clock.elapsedTime) * 0.0006;
    }
  });

  return (
    <mesh ref={objRef} rotation={[0, Math.PI, 0]} receiveShadow castShadow>
      <primitive object={obj} />
    </mesh>
  );
}
