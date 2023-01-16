import { useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useMouseInput } from "../hooks/useMouseInput";

const EnemyModel = (props) => {
  const model = useLoader(GLTFLoader, props.path);

  const pressedMouse = useMouseInput();
  console.log(pressedMouse.left);

  return (
    <primitive
      onPointerEnter={(e) => {
        if (pressedMouse.left === true) {
          alert("paf ! dans la kick du zombie !");
        }
      }}
      onClick={(e) => alert("paf ! dans la kick du zombie !")}
      receiveShadow
      object={model.scene}
      scale={props.scale}
      rotation={props.rotation}
      position={props.position}
    />
  );
};

export default EnemyModel;
