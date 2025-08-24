"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment } from "@react-three/drei"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"

function Pyramid({ position, scale = 1 }) {
  const meshRef = useRef(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002
    }
  })

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <coneGeometry args={[1, 2, 4]} />
      <meshStandardMaterial color="#000000" transparent opacity={0.6} roughness={0.3} metalness={0.1} />
    </mesh>
  )
}

function CameraController() {
  const controlsRef = useRef(null)

  useFrame((state) => {
    if (controlsRef.current) {
      controlsRef.current.autoRotate = true
      controlsRef.current.autoRotateSpeed = 0.5
    }
  })

  return (
    <OrbitControls
      ref={controlsRef}
      enableZoom={false}
      enablePan={false}
      enableRotate={false}
      autoRotate={true}
      autoRotateSpeed={0.5}
      minPolarAngle={Math.PI / 3}
      maxPolarAngle={Math.PI / 2}
    />
  )
}

export function PyramidBackground() {
  return (
    <div className="absolute inset-0 -z-50 pointer-events-none">
      <Canvas
        camera={{
          position: [0, 15, 20],
          fov: 60,
          near: 0.1,
          far: 1000,
        }}
        style={{ background: "transparent" }}
      >
        <CameraController />

        {/* Lighting */}
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={0.8} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} intensity={0.3} />

        {/* Environment for subtle reflections */}
        <Environment preset="dawn" />

        <Pyramid position={[0, 0, 0]} scale={3} />

        {/* Ground plane for depth */}
        <mesh position={[0, -3, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[100, 100]} />
          <meshStandardMaterial color="#e5e7eb" transparent opacity={0.05} />
        </mesh>
      </Canvas>
    </div>
  )
}
