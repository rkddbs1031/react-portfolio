import { IProject } from 'types/projects'

import { cx } from 'styles'
import styles from './projectContents.module.scss'

interface IProps {
  PROJECT_INFO: IProject[]
}

const ProjectContents = ({ PROJECT_INFO }: IProps) => {
  return (
    <div className={styles.contentsContainer}>
      {PROJECT_INFO.map((item) => (
        <section key={item.id} className={cx([styles.project, styles[`section${item.id}`]])}>
          <h2 className={styles.ir_su}>프로젝트 부분</h2>
          <p className={styles.num}>{item.num}</p>
          <div className={styles.left}>
            <p className={styles.desc}>{item.desc}</p>
          </div>
          <div className={styles.right}>
            <h3 className={styles.title}>
              <span>{item.h2.text1}</span>
              <span>{item.h2.text2}</span>
            </h3>
            <div className={styles.btnContainer}>
              <ul>
                {item.urls.map((url) => (
                  <li key={url.id}>
                    <a href={url.href} target='_blank' rel='noreferrer'>
                      {url.btn}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.imgContainer}>
              <img src={item.img.src} alt={item.img.alt} />
            </div>
          </div>
        </section>
      ))}
    </div>
  )
}
export default ProjectContents
