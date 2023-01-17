import { ColliderBox } from "../components/ColliderBox";
import { ColliderCylinder } from "../components/ColliderCynlinder";

const BoundingBox = () => {
  return (
    <>
      {/* city hall */}
      <ColliderBox position={[-0.42, 2, 0.4]} scale={[2, 5, 4.3]} />

      {/* city hall ramp */}
      <ColliderBox position={[2.27, 0.1, 0.4]} scale={[0.2, 0.1, 2]} />
      {/* city hall ramp */}
      <ColliderBox position={[2.1, 0.2, 0.4]} scale={[0.2, 0.1, 2]} />
      {/* city hall ramp */}
      <ColliderBox position={[1.9, 0.3, 0.4]} scale={[0.2, 0.1, 2]} />
      {/* city hall ramp */}
      <ColliderBox position={[1.7, 0.4, 0.4]} scale={[0.2, 0.1, 2]} />
      {/* city hall ramp */}
      <ColliderBox position={[1.5, 0.5, 0.4]} scale={[0.2, 0.1, 2]} />
      {/* city hall ramp */}
      <ColliderBox position={[1.3, 0.6, 0.4]} scale={[0.2, 0.1, 2]} />
      {/* city hall ramp */}
      <ColliderBox position={[1.1, 0.7, 0.4]} scale={[0.2, 0.1, 2]} />
      {/* city hall ramp */}
      <ColliderBox position={[0.8, 0.7, 0.4]} scale={[0.2, 0.1, 2]} />

      {/* stone */}
      <ColliderBox position={[3.7, 0.3, 0.9]} scale={[0.7, 0.85, 0.6]} />
      <ColliderBox position={[3.25, 0.5, 0.3]} scale={[1, 1.3, 0.9]} />
      <ColliderBox position={[4, 0.2, 0]} scale={[0.6, 0.3, 0.6]} />
      <ColliderBox position={[3.6, 0.2, -0.35]} scale={[0.7, 0.4, 0.5]} />
      {/* vehicule */}
      <ColliderBox position={[9.25, 0.35, -4.08]} scale={[0.9, 0.55, 0.4]} />
      {/* vehicule */}
      <ColliderBox position={[3.05, 0.26, -4.8]} scale={[1.15, 0.55, 0.55]} />
      {/* banc */}
      <ColliderBox position={[6.48, 0.25, -0.82]} scale={[0.2, 0.3, 0.6]} />
      {/* banc */}
      <ColliderBox position={[6.55, 0.25, 1.7]} scale={[0.2, 0.3, 0.6]} />
      {/* fontaine */}
      <ColliderBox position={[8.16, 0.25, 0.4]} scale={[1.9, 1.5, 1.9]} />
      {/* camion */}
      <ColliderBox position={[12.53, 0.25, -0.49]} scale={[0.8, 1.5, 1.7]} />
      {/* camion */}
      <ColliderBox position={[9.19, 0.25, -7.63]} scale={[1.2, 1.5, 1.7]} />
      {/* plante*/}
      <ColliderBox position={[9.25, 0.1, -8.74]} scale={[1.2, 0.25, 0.2]} />
      {/* plante*/}
      <ColliderBox position={[9.24, 0.1, -6.55]} scale={[1.2, 0.25, 0.2]} />
    </>
  );
};

export default BoundingBox;
