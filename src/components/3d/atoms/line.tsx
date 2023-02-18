import {
  BufferGeometry,
  Color,
  Line,
  LineBasicMaterial,
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
  // Gradient material, FFFFFF in 0, 0, 0 to 212121 in 8, 14, 0
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

export default BasicLine
export { GradientLine }
