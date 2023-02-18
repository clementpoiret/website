"use client" // this is a client component

import { Canvas } from "@react-three/fiber"

import LineArt from "@/components/3d/lineart"

import styles from "./background.module.scss"

export default function Background() {
  const description = "A simple line art component"

  return (
    <div className={styles.scene}>
      <Canvas
        shadows={true}
        className={styles.canvas}
        camera={{
          position: [64, 16, 0],
        }}
      >
        <LineArt position={[0, 0, 0]} />
      </Canvas>
      <p className={styles.quote}>
        <em>The shortest path is not always the fastest.</em>
        <br />
        <strong>Logic</strong> whill get you from A to Z.
        <br />
        <strong>Creativity</strong> will get you everywhere.
      </p>
    </div>
  )
}
