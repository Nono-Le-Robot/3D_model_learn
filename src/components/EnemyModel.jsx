import { useFrame, useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";
import { ColliderBox } from "../components/ColliderBox";
import { useState, Suspense } from "react";
import Zombie from "../prefabs/Zombie";
import { useEffect } from "react";

const EnemyModel = (props) => {
  const model = useLoader(GLTFLoader, props.path);
  const [zombiePos, setZombiePos] = useState(props.position);
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

  const initialPos = props.position;

  useFrame((scene, delta) => {
    console.log(zombiePos);
    mixer?.update(delta);
    const speed = -0.003;
    setZombiePos([zombiePos[0], zombiePos[1], zombiePos[2] + speed]);
  });
  let count = 0;

  // const pressedMouse = useMouseInput();

  return (
    <>
      <group>
        <primitive
          receiveShadow
          object={model.scene}
          scale={props.scale}
          rotation={props.rotation}
          position={zombiePos}
        />
        <ColliderBox position={zombiePos} scale={[0.3, 1.6, 0.3]} />;
      </group>
    </>
  );
};

export default EnemyModel;
