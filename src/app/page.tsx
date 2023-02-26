"use client"

import { useEffect, useState } from "react"

import Background from "@/components/background"
import { DefaultIcons } from "@/components/icons/icon"
import SplashScreen from "@/components/splash"
import GridWindowManager from "@/components/wm/manager"
import Navbar from "@/components/wm/navbar"
import Window from "@/components/wm/window"

import styles from "./page.module.scss"

export default function Home() {
  const [loading, setLoading] = useState(true)

  const [windows, setWindows] = useState<string[]>([])

  // Add a keydown event listener for the entire page
  useEffect(() => {
    console.log(windows)
    const handleKeyDown = (e: KeyboardEvent) => {
      // Open a terminal window on enter
      if (e.key === "Enter") {
        setWindows([...windows, "terminal"])
      }

      // Close all windows on escape
      if (e.key === "Escape") {
        setWindows([])
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [windows, setWindows])

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

        <GridWindowManager>
          {windows.map((window, i) => (
            <Window key={i} title={window}>
              <div className={styles.window__content}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  vitae nisl vitae nisl luctus aliquam. Nullam euismod, nisl
                </p>
              </div>
            </Window>
          ))}
        </GridWindowManager>
      </div>
    </>
  )
}
