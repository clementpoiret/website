"use client"

import styles from "./icon.module.scss"
import { LordIcon } from "./lord-icon"

const Icon = ({
  path,
  color,
  iconColor,
  borderColor,
  onClick,
}: {
  path: string
  color: string
  iconColor: string
  borderColor: string
  onClick: () => void
}) => {
  return (
    <div
      className={styles.icon}
      style={{ background: color, borderColor: borderColor }}
      onClick={onClick}
    >
      <LordIcon
        src={path}
        trigger="morph"
        colors={{ primary: iconColor }}
        size={24}
      />
    </div>
  )
}

const DefaultIcons = () => {
  return (
    <>
      <Icon
        path="/static/lotties/code.json"
        color="#3c3838"
        iconColor="#FAFAFA"
        borderColor="#565151"
        onClick={() => {
          window.open("https://github.com/clementpoiret", "_blank")
        }}
      />
      <Icon
        path="/static/lotties/personal.json"
        color="#0072c3"
        iconColor="#FAFAFA"
        borderColor="#00539a"
        onClick={() => {
          window.open("https://twitter.com/clement_poiret1", "_blank")
        }}
      />
      <Icon
        path="/static/lotties/work.json"
        color="#0043ce"
        iconColor="#FAFAFA"
        borderColor="#002d9c"
        onClick={() => {
          window.open("https://www.linkedin.com/in/clement-poiret/", "_blank")
        }}
      />
    </>
  )
}

export default Icon
export { DefaultIcons }
