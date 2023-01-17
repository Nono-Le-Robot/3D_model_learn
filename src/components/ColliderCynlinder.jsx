import { Cylinder } from "cannon";
import { useSphere } from "use-cannon";

const debug = false;

export function ColliderCylinder({ position, rotation, scale }) {
  useSphere(() => ({
    args: scale,
    position,
    type: "Static",
  }));
  return (
    debug && (
      <mesh position={position} rotation={rotation}>
        <sphereGeometry args={scale} />
        <meshBasicMaterial transparent={true} opacity={0.85} color={"red"} />
      </mesh>
    )
  );
}
