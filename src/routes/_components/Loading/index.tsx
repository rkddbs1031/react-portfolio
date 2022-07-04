import styles from './loading.module.scss'

const Loading = () => {
  return (
    <section className={styles.loading}>
      <div className={styles.loadingText}>
        <span className={styles.words}>L</span>
        <span className={styles.words}>O</span>
        <span className={styles.words}>A</span>
        <span className={styles.words}>D</span>
        <span className={styles.words}>I</span>
        <span className={styles.words}>N</span>
        <span className={styles.words}>G</span>
      </div>
    </section>
  )
}
export default Loading
