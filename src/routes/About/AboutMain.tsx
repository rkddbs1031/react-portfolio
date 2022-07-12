import AboutImg from 'assets/img/about_main.jpg'
import styles from './about.module.scss'

const AboutMain = () => {
  return (
    <section className={styles.section1}>
      <h2 className={styles.ir_su}>About</h2>
      <div className={styles.mainText}>
        <p>A STORY OF</p>
        <p className={styles.feText}>
          CREATIVE <em>FRONT-END</em>
        </p>
        <p className={styles.devText}>
          <em>DEVELOPER</em>
        </p>
        <div className={styles.subText}>
          <span className={styles.line} />
          <span>about me</span>
        </div>
      </div>
      <div className={styles.aboutImg}>
        <img src={AboutImg} alt='about_img' />
      </div>
    </section>
  )
}
export default AboutMain
