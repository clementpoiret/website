import styles from "./manager.module.scss"

const GridWindowManager = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.manager}>
      <div className={styles.grid}>{children}</div>
    </div>
  )
}

export default GridWindowManager
