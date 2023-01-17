import { useFrame, useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useMouseInput } from "../hooks/useMouseInput";
import * as THREE from "three";

const EnemyModel = (props) => {
  const model = useLoader(GLTFLoader, props.path);
  let mixer;
  if (model.animations.length > 0) {
    mixer = new THREE.AnimationMixer(model.scene);
    const action = mixer.clipAction(model.animations[2]);
    action.play();
    // model.animations.forEach((clip) => {
    //   const action = mixer.clipAction(clip);
    //   action.play();
    // });
  }

  useFrame((scene, delta) => {
    mixer?.update(delta);
    model.scene.children[0].position.z += 0.03;
  });

  console.log(model);

  const pressedMouse = useMouseInput();

  return (
    <primitive
      onPointerEnter={(e) => {
        if (pressedMouse.left === true) {
          console.log("tirer");
        }
      }}
      onClick={(e) => {
        console.log("tirer");
      }}
      receiveShadow
      object={model.scene}
      scale={props.scale}
      rotation={props.rotation}
      position={props.position}
    />
  );
};

export default EnemyModel;
