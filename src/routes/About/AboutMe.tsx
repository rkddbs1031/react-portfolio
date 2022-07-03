import { DESC_TOP, DESC_BOTTOM } from 'utils/about'

import AboutSub01 from 'assets/img/about_sub1.png'
import styles from './about.module.scss'

const AboutMe = () => {
  return (
    <section className={styles.section2}>
      <div className={styles.container}>
        <h2>WHO AM I ?</h2>
        <div className={styles.imgWrap}>
          <img src={AboutSub01} alt='about_img2' />
        </div>
        <div className={styles.textWrap}>
          <h3>
            HELLO, I&rsquo;M KANGYOON<span>FRONTEND DEVELOPER</span>
          </h3>
          <div className={styles.desc}>
            {DESC_TOP.map((item) => (
              <p key={item.id} className={styles[`desc${item.id}`]}>
                {item.p}
                <strong>{item.strong}</strong>
              </p>
            ))}
            <div className={styles.descBottom}>
              {DESC_BOTTOM.map((item) => (
                <p key={item.id}>{item.p}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default AboutMe
