import Circle from './Circle'

import styles from './animationProjects.module.scss'

const CIRCLES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const Wave = () => {
  return (
    <div className={styles.circles}>
      {CIRCLES.map((item) => (
        <Circle key={item} />
      ))}
    </div>
  )
}
export default Wave
