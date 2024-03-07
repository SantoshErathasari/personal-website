import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import Magic from '../Hero/Magic';

export default function Shapes() {
  // Ref for OrbitControls
  const controls = useRef();

  useEffect(() => {
    if (controls.current) {
      // Set limits
      controls.current.minDistance = 2; // minimum distance from the target point
      controls.current.maxDistance = 1; // maximum distance from the target point
    }
  }, []);

  return (
    <div className="row-span-1 row-start-1 -mt-14 aspect-square  md:col-span-1 md:col-start-2 md:mt-0">
      <Canvas>
        <ambientLight />
        <OrbitControls ref={controls} />
        <Suspense fallback={null}>
          <Magic />
        </Suspense>
      </Canvas>
    </div>
  );
}
