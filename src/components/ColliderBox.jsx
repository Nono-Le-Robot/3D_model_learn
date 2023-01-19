import { useFrame } from "react-three-fiber";
import { useBox } from "use-cannon";

const debug = true;

export function ColliderBox({ position, rotation, scale }) {
  useBox(() => ({
    args: scale,
    position,
  }));

  return (
    debug && (
      <mesh position={position} rotation={rotation}>
        <boxGeometry args={scale} />
        <meshBasicMaterial transparent={true} opacity={0.85} color={"red"} />
      </mesh>
    )
  );
}
