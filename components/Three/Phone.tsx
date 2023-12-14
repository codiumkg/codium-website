"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import {
  Group,
  MeshBasicMaterial,
  MeshLambertMaterial,
  MeshPhongMaterial,
  Vector2,
} from "three";
import { useGLTF } from "@react-three/drei";

export default function Phone() {
  const groupRef = useRef<Group>(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += Math.sin(clock.elapsedTime) * 0.001;
      groupRef.current.rotation.z += Math.sin(clock.elapsedTime * 1.1) * 0.001;
    }
  });

  const { nodes, materials } = useGLTF("/models/iphone.glb");
  return (
    <group
      dispose={null}
      ref={groupRef}
      scale={[22, 22, 22]}
      position={[0, 1.6, 0]}
      rotation={[0, Math.PI, 0]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bolt.geometry}
        material={materials.chrom}
        position={[-0.006, -0.073, 0]}
        rotation={[0, 0, Math.PI]}
      />
      <group position={[-0.013, 0.052, 0.005]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder.geometry}
          material={materials.chrom}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_1.geometry}
          material={materials.chrome_frame}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_2.geometry}
          material={materials.glass_cam}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_3.geometry}
          material={materials.camera_body}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_4.geometry}
          // material={materials.lenses}
          material={new MeshLambertMaterial({ color: 0xff666666 })}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_5.geometry}
          material={materials.flash}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_6.geometry}
          material={materials.back}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_7.geometry}
          material={materials.black_frame}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.grill_bottom.geometry}
        material={materials.chrom}
        position={[-0.015, -0.073, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.logo.geometry}
        material={materials.logo}
        position={[0.001, 0.002, 0.011]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.grill.geometry}
        material={materials.black_frame}
        position={[0, 0.071, -0.004]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.grill_body.geometry}
        material={materials.black_frame}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials.back}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_1.geometry}
        material={materials.antenna}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_2.geometry}
        material={materials.body_metall}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_3.geometry}
        material={materials.back_glass}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_4.geometry}
        material={materials.screen}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_5.geometry}
        material={materials.black_frame}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_6.geometry}
        material={materials.chrom}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_7.geometry}
        material={materials.camera_body}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={materials.screen}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002_1.geometry}
        // material={materials.front_glass}
        material={
          new MeshLambertMaterial({
            color: 0xff999999,
            transparent: true,
            opacity: 0.9,
          })
        }
      />
    </group>
  );
}

useGLTF.preload("/models/iphone.glb");
