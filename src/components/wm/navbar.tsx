import Clock from "./clock"
import styles from "./navbar.module.scss"

interface NavbarProps {
  children?: React.ReactNode
}

const Navbar = (props: NavbarProps) => {
  const { children } = props

  return (
    <div className={styles.footer}>
      <div className={styles.navbar}>{children}</div>
      <div className={styles.navbar}>
        <p className={styles.paragraph}>Website under construction</p>
      </div>
      <div className={styles.navbar}>
        <Clock />
      </div>
    </div>
  )
}

export default Navbar
