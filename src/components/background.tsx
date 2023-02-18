"use client" // this is a client component

import { Canvas } from "@react-three/fiber"

import styles from "@/app/page.module.css"
import LineArt from "@/components/3d/lineart"

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
        <strong>Logic</strong> whill get you from A to Z.
        <br />
        <strong>Creativity</strong> will get you everywhere.
      </p>
    </div>
  )
}
