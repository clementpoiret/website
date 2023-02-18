import React, { useRef } from "react"

import { useFrame, ThreeElements } from "@react-three/fiber"
import { Vector3 } from "three"

import Circle from "./atoms/circle"
import Letter from "./atoms/letter"
import BasicLine, { BezierCurve, MultipleGradientLines } from "./atoms/line"

export default function LineArt(props: ThreeElements["mesh"]) {
  const ref = useRef<THREE.Mesh>(null!)

  // const [hovered, hover] = useState(false)
  // const [clicked, click] = useState(false)

  // First message
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
  const circle = Circle()

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

  // Second message (Brachistochrone curve)
  const triangle = BasicLine(
    [new Vector3(0, 0, 0), new Vector3(0, 0, 16), new Vector3(-2, 8, 0)],
    0x212121
  )
  const curve = BezierCurve(
    [new Vector3(-2, 8, 0), new Vector3(0.7, -4, 8), new Vector3(0, 0, 16)],
    0xc62828
  )
  const circle2 = Circle()
  circle2.position.set(-1, 4.4, 8)
  circle2.rotateY(Math.PI / 2)
  const circle3 = Circle()
  circle3.position.set(0, 0.4, 12)
  circle3.rotateY(Math.PI / 2)
  const circle4 = Circle()
  circle4.position.set(0, -0.44, 14)
  circle4.rotateY(Math.PI / 2)
  const description = Letter(
    "The shortest path is not always the fastest.",
    0x000000,
    [0, -1, 0]
  )

  useFrame((state, delta) => (ref.current.rotation.y += 0.5 * delta))

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

      <primitive object={triangle} />
      <primitive object={curve} />
      <primitive object={circle2} />
      <primitive object={circle3} />
      <primitive object={circle4} />
    </mesh>
  )
}
