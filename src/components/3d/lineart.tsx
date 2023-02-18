import React, { useRef, useState } from "react"

import { useFrame, ThreeElements } from "@react-three/fiber"
import * as THREE from "three"
import { Text } from "troika-three-text"

export default function LineArt(props: ThreeElements["mesh"]) {
  const ref = useRef<THREE.Mesh>(null!)

  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)

  // Create a line from a set of points
  const logicPoints = []
  logicPoints.push(new THREE.Vector3(-4, 16, 0))
  logicPoints.push(new THREE.Vector3(0, 0, 0))
  const logicGeometry = new THREE.BufferGeometry().setFromPoints(logicPoints)
  const logicMaterial = new THREE.LineBasicMaterial({ color: 0x212121 })
  const logicLine = new THREE.Line(logicGeometry, logicMaterial)

  const creativePoints = []
  creativePoints.push(new THREE.Vector3(0, 0, 0))
  creativePoints.push(new THREE.Vector3(6, 7, 0))
  creativePoints.push(new THREE.Vector3(8, 14, 0))

  const creativeGeometry = new THREE.BufferGeometry().setFromPoints(
    creativePoints
  )
  // Gradient material, FFFFFF in 0, 0, 0 to 212121 in 8, 14, 0
  const creativeMaterial = new THREE.ShaderMaterial({
    uniforms: {
      color1: { value: new THREE.Color(0xffffff) },
      color2: { value: new THREE.Color(0x212121) },
    },
    vertexShader: `
      varying vec3 vPosition;
      void main() {
        vPosition = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 color1;
      uniform vec3 color2;
      varying vec3 vPosition;
      void main() {
        gl_FragColor = vec4(mix(color1, color2, vPosition.y / 14.0), 1.0);
      }
    `,
  })

  const creativeLine = new THREE.Line(creativeGeometry, creativeMaterial)

  // Add a plain circle in 0, 0, 0 visible from both sides
  const circle = new THREE.Mesh(
    new THREE.CircleGeometry(0.32, 32),
    new THREE.MeshBasicMaterial({ color: 0x212121, side: THREE.DoubleSide })
  )

  // Add a letter A in 0, 0, 0
  const letterA = new Text()
  letterA.text = "A"
  letterA.fontSize = 1
  letterA.color = 0x000000
  letterA.position.set(-0.25, -0.5, 0)

  // Add a letter Z in 16, 8, 0
  const letterZ = new Text()
  letterZ.text = "Z"
  letterZ.fontSize = 1
  letterZ.color = 0x000000
  letterZ.position.set(-4.5, 17.25, 0)

  // Add 8 letters in 8, 15, 0
  const letterU = new Text()
  const letterM = new Text()
  const letterB = new Text()
  const letterO = new Text()
  const letterR = new Text()
  const letterC = new Text()
  const letterE = new Text()
  const letterX = new Text()
  letterU.text = "U"
  letterM.text = "M"
  letterB.text = "B"
  letterO.text = "O"
  letterR.text = "R"
  letterC.text = "C"
  letterE.text = "E"
  letterX.text = "X"
  letterU.fontSize = 1
  letterM.fontSize = 1
  letterB.fontSize = 1
  letterO.fontSize = 1
  letterR.fontSize = 1
  letterC.fontSize = 1
  letterE.fontSize = 1
  letterX.fontSize = 1
  letterU.color = 0x000000
  letterM.color = 0x000000
  letterB.color = 0x000000
  letterO.color = 0x000000
  letterR.color = 0x000000
  letterC.color = 0x000000
  letterE.color = 0x000000
  letterX.color = 0x000000
  letterU.position.set(5.5, 15, 0)
  letterM.position.set(6, 16.8, 0)
  letterB.position.set(7, 15.2, 0)
  letterO.position.set(7.2, 16.6, 0)
  letterR.position.set(8, 15.9, 0)
  letterC.position.set(9, 15.6, 0)
  letterE.position.set(10, 15, 0)
  letterX.position.set(9.6, 16.9, 0)

  useFrame((state, delta) => (ref.current.rotation.y += delta))

  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? [2, 2, 2] : [1, 1, 1]}
      onClick={(e) => click(!clicked)}
      onPointerOver={(e) => hover(true)}
      onPointerOut={(e) => hover(false)}
    >
      <primitive object={circle} />
      <primitive object={logicLine} />
      <primitive object={creativeLine} />

      <primitive object={letterA} />
      <primitive object={letterZ} />
      <primitive object={letterU} />
      <primitive object={letterM} />
      <primitive object={letterB} />
      <primitive object={letterO} />
      <primitive object={letterR} />
      <primitive object={letterC} />
      <primitive object={letterE} />
      <primitive object={letterX} />
    </mesh>
  )
}
