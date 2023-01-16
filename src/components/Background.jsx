import * as THREE from "three";
import { useLoader, useThree } from "react-three-fiber";
import { useMemo } from "react";

const Background = (props) => {
  const texture = useLoader(THREE.TextureLoader, "/bck.jpg");

  const { gl } = useThree();
  const formatted = useMemo(
    () =>
      new THREE.WebGLCubeRenderTarget(
        texture.image.height
      ).fromEquirectangularTexture(gl, texture),
    []
  );
  return <primitive attach="background" object={formatted} />;
};

export default Background;
