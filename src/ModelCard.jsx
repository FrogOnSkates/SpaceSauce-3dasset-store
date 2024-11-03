// ModelCard.jsx
import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Bounds } from '@react-three/drei';

function RotatingModel({ children }) {
  const groupRef = useRef();

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.2 * delta;
      groupRef.current.rotation.x += 0.2 * delta;
    }
  });

  return <group ref={groupRef}>{children}</group>;
}

function ModelCard({ title, ModelComponent, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <h2>{title}</h2>
      <div className="canvas-container">
        <Canvas
          className="model-canvas"
          camera={{ position: [0, 0, 3], fov: 60}} // Increased z-position from 3 to 5
        >
          <ambientLight intensity={0.8} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <Suspense fallback={null}>
            <Bounds fit clip observe margin={2.5}> // Increased margin from 0.75 to 1.5
              <RotatingModel>
                <ModelComponent />
              </RotatingModel>
            </Bounds>
          </Suspense>
          <OrbitControls enableZoom={true} />
        </Canvas>
      </div>
    </div>
  );
}

export default ModelCard;