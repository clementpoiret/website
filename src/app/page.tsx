import Background from "@/components/background"
import Navbar from "@/components/wm/navbar"

import styles from "./page.module.scss"

export default function Home() {
  return (
    <div className={styles.main}>
      <Background />

      <Navbar />
    </div>
  )
}
