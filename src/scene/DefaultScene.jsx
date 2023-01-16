import React, { useEffect, useRef, Suspense } from "react";
import { Physics } from "use-cannon";
import { Canvas, useThree, useFrame } from "react-three-fiber";
import { PointerLockControls, PerspectiveCamera } from "@react-three/drei";
import { Vector3 } from "three";
import { Plane } from "../prefabs/Plane";
import { Player } from "../prefabs/Player";
import Reticle from "../components/Reticle";
import Model from "../components/Model";
import Stone from "../prefabs/Stone";
import Zombie from "../prefabs/Zombie";
import Background from "../components/Background";
import BoundingBox from "../boxes/BoundingBox";

export const DefaultScene = () => {
  const controlsRef = useRef();
  const isLocked = useRef(false);
  return (
    <>
      <Canvas
        // shadowMap
        raycaster={{
          computeOffsets: (_ref, { size: { width, height } }) => {
            if (isLocked.current) {
              return {
                offsetX: width / 2,
                offsetY: height / 2,
              };
            } else {
              return null;
            }
          },
        }}
      >
        <Suspense fallback={null}>
          <Background />
        </Suspense>
        <Camera />
        <MouseReticle />
        <PointerLockControls
          onUpdate={() => {
            if (controlsRef.current) {
              controlsRef.current.addEventListener("lock", () => {
                isLocked.current = true;
              });
              controlsRef.current.addEventListener("unlock", () => {
                isLocked.current = false;
              });
            }
          }}
          ref={controlsRef}
        />
        {/** Pointer lock */}
        {/** Lighting */}
        <directionalLight position={[3, 0, 3]} intensity={0.5} castShadow />
        <pointLight position={[0, 0, -3]} intensity={0.6} castShadow />
        <pointLight position={[0, 0, 4]} intensity={0.6} castShadow />
        <ambientLight intensity={0.6} />
        {/** Physic objects */}
        <Physics
          gravity={[0, -9, 0]}
          tolerance={0}
          iterations={50}
          broadphase={"SAP"}
        >
          <Player />
          <Plane />
          <Model
            path="/models/low_poly_city/scene.glb"
            scale={new Array(3).fill(0.3)}
            position={[0, -1.6, 0]}
          />
          <Stone />
          <Zombie />
          <BoundingBox />
        </Physics>
      </Canvas>
    </>
  );
};

function Camera() {
  const mouseReticle = useRef();
  const { camera, mouse } = useThree();
  // initialize camera to look at origin.
  useEffect(() => {
    camera.lookAt(0, 0, 0);
  }, [camera]);

  return (
    <PerspectiveCamera makeDefault position={[-100, -1, -10]}>
      {/* This reticle lives where the camera is pointing. 
          This would be used in a first person environment */}
      <group position={[0, 0, -1]}>
        <Reticle />
      </group>
    </PerspectiveCamera>
  );
}

// Project a reticle of the mouse position onto the near plane.
// A little janky because the rotation is off, so it gets cut.
function MouseReticle() {
  const { camera, mouse } = useThree();
  const mouseReticle = useRef();

  useFrame(() => {
    if (mouseReticle.current) {
      const vector = new Vector3(mouse.x, mouse.y, -0.8).unproject(camera);
      mouseReticle.current.position.set(...vector.toArray());
    }
  });

  return (
    <mesh ref={mouseReticle}>
      <sphereBufferGeometry args={[0, 100, 100]} />
      <meshBasicMaterial color={"red"} />
    </mesh>
  );
}
