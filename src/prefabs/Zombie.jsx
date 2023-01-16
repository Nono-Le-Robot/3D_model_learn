import React, { Suspense } from "react";
import EnemyModel from "../components/EnemyModel";

const Zombie = (props) => {
  return (
    <Suspense fallback={null}>
      <EnemyModel
        path="/models/zombie/scene.gltf"
        scale={new Array(3).fill(0.006)}
        rotation={[0, 9.5, 0]}
        position={[5, 0.1, 5.35]}
      />
    </Suspense>
  );
};

export default Zombie;
