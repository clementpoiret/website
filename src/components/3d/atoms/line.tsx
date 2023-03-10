import {
  BufferGeometry,
  Color,
  Line,
  LineBasicMaterial,
  QuadraticBezierCurve3,
  ShaderMaterial,
  Vector3,
} from "three"

const BasicLine = (points: Vector3[], color: number) => {
  const geometry = new BufferGeometry().setFromPoints(points)
  const material = new LineBasicMaterial({ color: color })
  const line = new Line(geometry, material)

  return line
}

const GradientLine = (points: Vector3[], color1: number, color2: number) => {
  const geometry = new BufferGeometry().setFromPoints(points)
  const material = new ShaderMaterial({
    uniforms: {
      color1: { value: new Color(color1) },
      color2: { value: new Color(color2) },
    },
    vertexShader: `
      varying vec3 vPosition;
      void main() {
        vPosition = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 color1;
      uniform vec3 color2;
      varying vec3 vPosition;
      void main() {
        gl_FragColor = vec4(mix(color1, color2, vPosition.y / 14.0), 1.0);
      }
    `,
  })

  const line = new Line(geometry, material)

  return line
}

// Generate multiple lines with the same gradient
// All line have the same start and end points
// Each line has 2 random points in between
const MultipleGradientLines = (
  numberOfLines: number,
  from: Vector3,
  to: Vector3,
  color1: number,
  color2: number
) => {
  const lines = []

  // Compute the coordinates at 1/3 the distance between the start and end points
  // This is used to generate the random points in between
  const x = (to.x - from.x) / 3
  const y = (to.y - from.y) / 3

  for (let i = 0; i < numberOfLines; i++) {
    // Set the second color to be green 2/8 of the time
    // and red 1/8 of the time
    const randomColor = Math.random()
    if (randomColor < 1 / 8) {
      color2 = 0x2e7d32
    } else if (randomColor < 2 / 8) {
      color2 = 0xc62828
    }

    const randomPoint1 = new Vector3(
      Math.random() * 8 - 4 + x,
      Math.random() * 2 - 1 + y,
      0
    )
    const randomPoint2 = new Vector3(
      Math.random() * 8 - 4 + x * 2,
      Math.random() * 2 - 1 + y * 2,
      0
    )

    lines.push(
      GradientLine([from, randomPoint1, randomPoint2, to], color1, color2)
    )
  }

  return lines
}

const BezierCurve = (position: Vector3[], color: number) => {
  const curve = new QuadraticBezierCurve3(position[0], position[1], position[2])

  const points = curve.getPoints(50)
  const geometry = new BufferGeometry().setFromPoints(points)

  const material = new LineBasicMaterial({ color: color })

  // Create the final object to add to the scene
  const curveObject = new Line(geometry, material)

  return curveObject
}

export default BasicLine
export { BezierCurve, GradientLine, MultipleGradientLines }
