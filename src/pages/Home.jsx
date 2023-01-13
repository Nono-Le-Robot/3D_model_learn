import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import * as THREE from "three";
import * as dat from "dat.gui";
import styled from "styled-components";

const App = () => {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    renderer.setPixelRatio(devicePixelRatio);
    camera.position.z = 10;

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(0, 0, 11);
    scene.add(light);

    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }
    animate();
  }, []);

  return (
    <>
      <Container></Container>
    </>
  );
};

const Container = styled.div`
  body {
    margin: 0;
  }
`;

export default App;
