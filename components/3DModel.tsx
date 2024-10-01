"use client";
import { Canvas } from "@react-three/fiber";

function Floor(props: any) {
  return (
    <mesh {...props} receiveShadow>
      <boxGeometry args={[20, 1, 10]} />
      <meshPhysicalMaterial color="white" />
    </mesh>
  );
}

export default function Model() {
  return (
    <div className="h-[90vh] m-3">
      <Canvas
        shadows={true}
        camera={{
          position: [-6, 7, 7],
        }}
      >
        <ambientLight color={"white"} intensity={1} />

        <Floor position={[10, -10, -10]} />
      </Canvas>
    </div>
  );
}
