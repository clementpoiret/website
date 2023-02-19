"use client"

import { useEffect } from "react"

import Background from "@/components/background"
import { DefaultIcons } from "@/components/icons/icon"
import Navbar from "@/components/wm/navbar"

import styles from "./page.module.scss"

const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === "Enter") {
    window.open("https://github.com/clementpoiret", "_blank")
  }
}

export default function Home() {
  // Add a keydown event listener for the entire page
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  return (
    <div className={styles.main}>
      <Background />

      <Navbar>
        <DefaultIcons />
      </Navbar>
    </div>
  )
}
