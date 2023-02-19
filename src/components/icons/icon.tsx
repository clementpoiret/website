"use client"

import styles from "./icon.module.scss"
import { LordIcon } from "./lord-icon"

const Icon = ({
  path,
  color,
  iconColor,
  onClick,
}: {
  path: string
  color: string
  iconColor: string
  onClick: () => void
}) => {
  return (
    <div
      className={styles.icon + " "}
      style={{ background: color }}
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
        color="black"
        iconColor="#FAFAFA"
        onClick={() => {
          window.open("https://github.com/clementpoiret", "_blank")
        }}
      />
      <Icon
        path="/static/lotties/personal.json"
        color="#2196F3"
        iconColor="#FAFAFA"
        onClick={() => {
          window.open("https://twitter.com/clement_poiret1", "_blank")
        }}
      />
      <Icon
        path="/static/lotties/work.json"
        color="#3F51B5"
        iconColor="#FAFAFA"
        onClick={() => {
          window.open("https://www.linkedin.com/in/clement-poiret/", "_blank")
        }}
      />
    </>
  )
}

export default Icon
export { DefaultIcons }
