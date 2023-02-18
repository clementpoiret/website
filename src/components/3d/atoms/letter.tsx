import { Text } from "troika-three-text"

const Letter = (text: string, color: number, position: number[]) => {
  const letter = new Text()

  letter.text = text
  letter.fontSize = 1
  letter.color = color
  letter.position.set(...position)

  return letter
}

export default Letter
