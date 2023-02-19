"use client"

import React, { useEffect } from "react"

import { defineElement } from "lord-icon-element"
import lottie from "lottie-web"
export type LordIconTrigger =
  | "hover"
  | "click"
  | "loop"
  | "loop-on-hover"
  | "morph"
  | "morph-two-way"

export type LordIconColors = {
  primary?: string
  secondary?: string
}

export type LordIconProps = {
  src?: string
  trigger?: LordIconTrigger
  colors?: LordIconColors
  delay?: number
  size?: number
}

export const LordIcon = ({
  colors,
  src,
  size,
  trigger,
  delay,
}: LordIconProps) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      defineElement(lottie.loadAnimation)
    }
  })

  return (
    <lord-icon
      colors={`primary:${colors?.primary},secondary:${colors?.secondary}`}
      src={src}
      trigger={trigger}
      delay={delay}
      style={{
        width: size,
        height: size,
      }}
    />
  )
}
