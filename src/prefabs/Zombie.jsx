import React, { Suspense } from "react";
import EnemyModel from "../components/EnemyModel";

const Zombie = (props) => {
  return (
    <EnemyModel
      path="/models/zombie3/scene.gltf"
      scale={new Array(3).fill(0.5)}
      rotation={[0, 9.5, 0]}
      position={[5, 0.1, 5.35]}
    />
  );
};

export default Zombie;
