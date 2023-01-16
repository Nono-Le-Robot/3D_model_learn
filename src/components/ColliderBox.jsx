import { useBox } from "use-cannon";

const debug = false;

export function ColliderBox({ position, rotation, scale }) {
  useBox(() => ({
    args: scale,
    position,
    type: "Static",
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
