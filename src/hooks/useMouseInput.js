import { useEffect, useState } from "react";

export const useMouseInput = () => {
  const [keysPressed, setPressedKeys] = useState({ left: false, right: false });

  useEffect(() => {
    const handleMouseDown = (e) => {
      const shooting = true;
      if (e.button === 1) {
        setPressedKeys((current) => ({ ...current, right: true }));
      } else if (e.button === 0) {
        setPressedKeys((current) => ({ ...current, left: true }));
      }
    };
    const handleMouseUp = (e) => {
      const shooting = false;
      if (e.button === 1) {
        setPressedKeys((current) => ({ ...current, right: false }));
      } else if (e.button === 0) {
        setPressedKeys((current) => ({ ...current, left: false }));
      }
    };

    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return keysPressed;
};
