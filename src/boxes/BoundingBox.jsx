import { ColliderBox } from "../components/ColliderBox";

const BoundingBox = () => {
  return (
    <>
      {/* city hall */}
      <ColliderBox position={[-0.42, 2, 0.4]} scale={[2, 5, 4.3]} />
      {/* city hall ramp */}
      <ColliderBox position={[1.3, -0.6, 0.4]} scale={[1.9, 3, 2.15]} />
      {/* stone */}
      <ColliderBox position={[3.5, 0.5, 0.35]} scale={[1.5, 1.2, 1.7]} />
      {/* vehicule */}
      <ColliderBox position={[9.25, 0.35, -4.08]} scale={[0.9, 0.55, 0.4]} />
      {/* vehicule */}
      <ColliderBox position={[3.05, 0.26, -4.8]} scale={[1.15, 0.55, 0.55]} />
      {/* banc */}
      <ColliderBox position={[6.48, 0.25, -0.82]} scale={[0.2, 0.3, 0.6]} />
      {/* banc */}
      <ColliderBox position={[6.55, 0.25, 1.7]} scale={[0.2, 0.3, 0.6]} />
    </>
  );
};

export default BoundingBox;
