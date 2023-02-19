"use client"

import { useEffect, useState } from "react"

import Background from "@/components/background"
import { DefaultIcons } from "@/components/icons/icon"
import SplashScreen from "@/components/splash"
import Navbar from "@/components/wm/navbar"

import styles from "./page.module.scss"

const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === "Enter") {
    window.open("https://github.com/clementpoiret", "_blank")
  }
}

export default function Home() {
  const [loading, setLoading] = useState(true)

  // Add a keydown event listener for the entire page
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  // Add a splash screen until the page is loaded
  useEffect(() => {
    if (document.readyState === "complete") {
      setLoading(false)
    }
  }, [setLoading])

  return (
    <>
      {loading && <SplashScreen />}
      <div className={styles.main}>
        <Background />

        <Navbar>
          <DefaultIcons />
        </Navbar>
      </div>
    </>
  )
}
