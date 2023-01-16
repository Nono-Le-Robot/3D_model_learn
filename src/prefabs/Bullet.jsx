import { useSphere } from "use-cannon";
import React from "react";

export const Bullet = (props) => {
  /** Bullet collider */
  const [sphereRef] = useSphere(() => ({
    mass: 1,
    args: 0.1,
    ...props,
  }));

  return (
    <mesh ref={sphereRef} castShadow>
      <sphereBufferGeometry args={[0.01, 32, 32]} />
      <meshLambertMaterial color="black" />
    </mesh>
  );
};
