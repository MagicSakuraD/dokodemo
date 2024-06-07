"use client";
import React from "react";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import Geometry from "./Geometry";

const CubePage = () => {
  return (
    <div className="container mt-6 mx-auto h-2/3">
      <Canvas camera={{ position: [0, 0, 10] }}>
        <ambientLight intensity={0.1} />
        <directionalLight color="#dcfce7" position={[0, 0, 2]} />
        <Geometry />
      </Canvas>
    </div>
  );
};

export default CubePage;
