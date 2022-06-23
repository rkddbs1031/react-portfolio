import styles from './animationProjects.module.scss'

const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.appUI}>
        <div className={styles.cardItem} />
        <div className={styles.cardItem} />
        <div className={styles.cardItem} />
        <div className={styles.cardItem} />
      </div>
    </div>
  )
}
export default Card
