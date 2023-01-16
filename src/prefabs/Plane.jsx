import React from "react";
import { usePlane } from "use-cannon";

export const Plane = () => {
  /** Plane collider */
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, 0.05, 0],
    material: {
      friction: 0.1,
    },
  }));

  return (
    <mesh ref={ref} receiveShadow={true} scale={[1000, 1000, 1000]}>
      <planeBufferGeometry />
      <meshPhongMaterial color={"skyblue"} receiveShadow />
    </mesh>
  );
};
