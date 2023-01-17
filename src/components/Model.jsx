import { useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Model = (props) => {
  const model = useLoader(GLTFLoader, props.path);

  return (
    <primitive
      receiveShadow
      object={model.scene}
      scale={props.scale}
      rotation={props.rotation}
      position={props.position}
    />
  );
};

export default Model;
