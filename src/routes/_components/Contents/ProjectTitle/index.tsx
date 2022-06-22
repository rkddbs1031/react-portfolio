import { IDescription, ISpan, ITitle } from 'types/projects'

import AniInfo from './AniInfo'
import styles from './projectTitle.module.scss'

interface IProps {
  ANI_INFO: ISpan[]
  TITLE_INFO: ITitle[]
  DESCRIPTION?: IDescription
}

const ProjectTitle = ({ ANI_INFO, TITLE_INFO, DESCRIPTION }: IProps) => {
  return (
    <section className={styles.titleContainer}>
      <h2 className={styles.ir_su}>프로젝트 부분</h2>
      {ANI_INFO.map((item) => (
        <AniInfo key={item.span} item={item.span} />
      ))}
      <div className={styles.titleWrap}>
        <div className={styles.title}>
          {TITLE_INFO.map((item) => (
            <p key={item.id}>
              <span>{item.text}</span>
            </p>
          ))}
        </div>
        <div className={styles.description}>
          <p className={styles.scroll}>
            Scroll down
            <span />
          </p>
          <p className={styles.text}>
            <span>{DESCRIPTION?.text}</span>
          </p>
        </div>
      </div>
    </section>
  )
}
export default ProjectTitle
