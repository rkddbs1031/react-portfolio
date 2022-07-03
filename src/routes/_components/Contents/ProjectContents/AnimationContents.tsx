import { IAnimation } from 'types/projects'

import Cube from 'routes/Projects/Animations/Cube'
import Wave from 'routes/Projects/Animations/Wave'
import Tail from 'routes/Projects/Animations/Tail'
import Card from 'routes/Projects/Animations/Card'
import Loading from 'routes/Projects/Animations/Loading'
import Bar from 'routes/Projects/Animations/Bar'
import styles from './projectContents.module.scss'

interface IProps {
  PROJECT_INFO: IAnimation[]
}

const ANIMATIONS = [
  {
    id: 1,
    component: <Cube />,
  },
  {
    id: 2,
    component: <Wave />,
  },
  {
    id: 3,
    component: <Tail />,
  },
  {
    id: 4,
    component: <Card />,
  },
  {
    id: 5,
    component: <Loading />,
  },
  {
    id: 6,
    component: <Bar />,
  },
]

const AnimationContents = ({ PROJECT_INFO }: IProps) => {
  return (
    <div className={styles.contentsContainer}>
      <div className={styles.aniProjects}>
        {PROJECT_INFO.map((item) => (
          <section key={item.id} className={styles.project}>
            <h2 className={styles.ir_su}>프로젝트 부분</h2>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.num}>{item.num}</p>
            <div className={styles.box}>{ANIMATIONS[item.id - 1].component}</div>
            <div className={styles.descContainer}>
              <p className={styles.desc}>→ {item.desc}</p>
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
export default AnimationContents
