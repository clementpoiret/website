import styles from "./splash.module.scss"

const SplashScreen = () => {
  return (
    <div className={styles.splash}>
      <p className={styles.text}>Booting COS Linux v0.0.1</p>
    </div>
  )
}

export default SplashScreen
