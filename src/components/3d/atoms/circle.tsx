import { CircleGeometry, DoubleSide, Mesh, MeshBasicMaterial } from "three"

const Circle = () => {
  const circle = new Mesh(
    new CircleGeometry(0.32, 32),
    new MeshBasicMaterial({ color: 0x212121, side: DoubleSide })
  )

  return circle
}

export default Circle
