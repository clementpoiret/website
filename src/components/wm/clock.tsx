"use client"

import { useEffect, useState } from "react"

import Defaults from "@/utils/constants"
import { useMediaQuery } from "@/utils/useMediaQuery"

import styles from "./clock.module.scss"

const Clock = () => {
  const [time, setTime] = useState(new Date())
  const isXs = useMediaQuery(Defaults.breakpoints.xs)

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <div className={styles.clock}>
      <span className={styles.time}>
        {time.toLocaleTimeString("fr-FR", {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </span>
      <span className={styles.date}>
        {time.toLocaleDateString("fr-FR", {
          weekday: isXs ? undefined : "short",
          year: "2-digit",
          month: "short",
          day: "numeric",
        })}
      </span>
    </div>
  )
}

export default Clock
