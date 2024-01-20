"use client";
import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";

interface data {
  positions: number[][];
  velocities: number[][];
  accs: number[][];
}

interface ParticleProps {
  color: string;
  index: number;
  data: data;
}

const Particle = ({ color, index, data }: ParticleProps) => {
  const sphere = useRef();

  let Vertices = [
    [
      data.positions[index][0],
      data.positions[index][1],
      data.positions[index][2],
    ],
  ];

  const newVertices = Vertices.map(([x, y, z]) => new THREE.Vector3(x, y, z));
  const lineGeometry = new THREE.BufferGeometry().setFromPoints(newVertices);

  useFrame(({ clock }) => {
    let force = [0, 0, 0];
    for (let i = 0; i < data.positions.length; i++) {
      if (i !== index) {
        let X = data.positions[i][0] - data.positions[index][0];
        let Y = data.positions[i][1] - data.positions[index][1];
        let D = Math.sqrt(X ** 2 + Y ** 2);

        force[0] += (1 * X) / D ** 3;
        force[1] += (1 * Y) / D ** 3;
      }
    }

    data.accs[index] = force;

    data.velocities[index][0] += data.accs[index][0] * 0.01;
    data.velocities[index][1] += data.accs[index][1] * 0.01;

    const x = data.positions[index][0] + data.velocities[index][0] * 0.01;
    const y = data.positions[index][1] + data.velocities[index][1] * 0.01;

    sphere.current.position.x = x;
    sphere.current.position.y = y;

    Vertices.push([x, y, 0]);
    data.positions[index] = [x, y, 0];

    const newes = Vertices.map(([x, y, z]) => new THREE.Vector3(x, y, z));

    lineGeometry.setFromPoints(newes);
  });
  return (
    <>
      <group>
        <line geometry={lineGeometry}>
          <lineBasicMaterial
            attach="material"
            color={color}
            linewidth={10}
            linecap={"round"}
            linejoin={"round"}
          />
        </line>
        <mesh ref={sphere}>
          <circleGeometry args={[0.05, 50]} />
          <meshBasicMaterial color={color} />
        </mesh>
      </group>
    </>
  );
};

export default Particle;
