import React, { Suspense } from "react";
import Model from "../components/Model";

const Stone = (props) => {
  return (
    <Suspense fallback={null}>
      <Model
        path="/models/stylized_rocks/scene.gltf"
        scale={new Array(3).fill(1)}
        rotation={[0, 0, 0]}
        position={[3.5, 0.65, 0.35]}
      />
    </Suspense>
  );
};

export default Stone;
