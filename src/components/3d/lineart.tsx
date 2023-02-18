import React, { useRef } from "react"

import { useFrame, ThreeElements } from "@react-three/fiber"
import {
  CircleGeometry,
  DoubleSide,
  Mesh,
  MeshBasicMaterial,
  Vector3,
} from "three"

import Letter from "./atoms/letter"
import BasicLine, { MultipleGradientLines } from "./atoms/line"

export default function LineArt(props: ThreeElements["mesh"]) {
  const ref = useRef<THREE.Mesh>(null!)

  // const [hovered, hover] = useState(false)
  // const [clicked, click] = useState(false)

  const logicLine = BasicLine(
    [new Vector3(0, 0, 0), new Vector3(-4, 16, 0)],
    0x212121
  )

  const creativeLines = MultipleGradientLines(
    8, // Number of lines
    new Vector3(0, 0, 0), // Start point
    new Vector3(8, 14, 0), // End point
    0xeceff1, // Color 1
    0x212121 // Color 2
  )

  // Add a plain circle in 0, 0, 0 visible from both sides
  const circle = new Mesh(
    new CircleGeometry(0.32, 32),
    new MeshBasicMaterial({ color: 0x212121, side: DoubleSide })
  )

  const letters = [
    "A",
    0x000000,
    [-0.25, -0.5, 0],
    "Z",
    0x000000,
    [-4.5, 17.25, 0],
    "U",
    0x000000,
    [5.5, 15, 0],
    "M",
    0x000000,
    [6, 16.8, 0],
    "B",
    0x000000,
    [7, 15.2, 0],
    "O",
    0x000000,
    [7.2, 16.6, 0],
    "R",
    0x000000,
    [8, 15.9, 0],
    "C",
    0x000000,
    [9, 15.6, 0],
    "E",
    0x000000,
    [10, 15, 0],
    "X",
    0x000000,
    [9.6, 16.9, 0],
  ]

  const letterObjects = []
  for (let i = 0; i < letters.length; i += 3) {
    letterObjects.push(
      Letter(
        letters[i] as string,
        letters[i + 1] as number,
        letters[i + 2] as number[]
      )
    )
  }

  useFrame((state, delta) => (ref.current.rotation.y += delta))

  return (
    <mesh
      {...props}
      ref={ref}
      // scale={clicked ? [2, 2, 2] : [1, 1, 1]}
      // onClick={(e) => click(!clicked)}
      // onPointerOver={(e) => hover(true)}
      // onPointerOut={(e) => hover(false)}
    >
      <primitive object={circle} />
      <primitive object={logicLine} />

      {creativeLines.map((line, i) => (
        <primitive object={line} key={i} />
      ))}

      {letterObjects.map((letter, i) => (
        <primitive object={letter} key={i} />
      ))}
    </mesh>
  )
}
