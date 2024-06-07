import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import * as THREE from "three";
import {
  TransformControls,
  OrbitControls,
  PivotControls,
  Html,
  Text,
  Float,
  MeshReflectorMaterial,
} from "@react-three/drei";

const Geometry = () => {
  const torusRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  const sphereRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (torusRef.current && groupRef.current) {
      torusRef.current.rotation.x += delta;
      torusRef.current.rotation.y += delta;
    }
  });
  return (
    <>
      <OrbitControls makeDefault />
      <directionalLight
        position={[1, 2, 3]}
        color={"#10b981"}
        intensity={1.5}
      />
      <ambientLight intensity={0.5} />
      <group ref={groupRef}>
        <mesh scale={[0.5, 0.5, 0.5]} position-y={4} ref={sphereRef}>
          <sphereGeometry args={[3, 32, 32]} />
          <meshToonMaterial color={"#7c3aed"} />
        </mesh>
        {sphereRef.current && (
          <TransformControls
            object={sphereRef.current as THREE.Object3D}
            mode="translate"
          />
        )}

        <PivotControls
          anchor={[0, 0, 0]}
          depthTest={false}
          lineWidth={4}
          axisColors={["#22c55e", "#3b82f6", "#f43f5e"]}
          scale={50}
          fixed={true}
        >
          <mesh
            ref={torusRef}
            position={[0, 1, 0]}
            rotation-x={0.5}
            scale={0.8}
          >
            <torusKnotGeometry />
            <meshToonMaterial args={[{ color: "#8b5cf6" }]} />
            <Html
              position={[3, 3, 0]}
              center
              distanceFactor={6}
              occlude={[torusRef, sphereRef]}
              className="text-green-600 font-bold underline decoration-rose-500"
            >
              THREE
            </Html>
          </mesh>
        </PivotControls>
      </group>
      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={7}>
        <planeGeometry />
        <MeshReflectorMaterial resolution={512} mirror={0.8} />
      </mesh>
      <Float speed={5} floatIntensity={2}>
        <Text
          color={"salmon"}
          fontSize={1}
          position-y={-2}
          maxWidth={2}
          textAlign="center"
        >
          k423, 3D Text
          <meshNormalMaterial />
        </Text>
      </Float>
    </>
  );
};

export default Geometry;
