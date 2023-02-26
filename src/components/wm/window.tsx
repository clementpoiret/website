import styles from "./window.module.scss"

const Window = ({
  children,
  title,
}: {
  children: React.ReactNode
  title: string
}) => {
  return (
    <div className={styles.window}>
      <div className={styles.titlebar}>
        <div className={styles.titlebar__text}>{title}</div>
        <div className={styles.titlebar__controls}>
          <button
            aria-label="Minimize"
            className={styles.titlebar__controls__min}
          />
          <button
            aria-label="Maximize"
            className={styles.titlebar__controls__max}
          />
          <button
            aria-label="Close"
            className={styles.titlebar__controls__close}
          />
        </div>
      </div>
      <div className={styles.body}>{children}</div>
    </div>
  )
}

export default Window
