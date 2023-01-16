import { useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Model = (props) => {
  const model = useLoader(GLTFLoader, props.path);

  console.log(model.scene);

  return (
    <primitive
      // onClick={(e) => console.log("gergergerg")}
      receiveShadow
      object={model.scene}
      scale={props.scale}
      rotation={props.rotation}
      position={props.position}
    />
  );
};

export default Model;
