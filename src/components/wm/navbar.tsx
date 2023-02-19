import Clock from "./clock"
import styles from "./navbar.module.scss"

interface NavbarProps {
  children?: React.ReactNode
}

const Navbar = (props: NavbarProps) => {
  const { children } = props

  return (
    <div className={styles.navbar}>
      {children}
      <span className={styles.separator} />
      <Clock />
    </div>
  )
}

export default Navbar
