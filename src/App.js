// import React, { useState } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

import React from "react";

// Three
import { Canvas } from "react-three-fiber";
import { Vector3 } from "three";
// Components
import Reticle from "./components/Reticle";
import { Crosshair } from "./components/Crosshair";
import { UI } from "./components/UI";

//Scene
import { DefaultScene } from "./scene/DefaultScene";

// Styles
import "./styles.css";

export default function App() {
  return (
    <>
      <DefaultScene />
    </>
  );
}
