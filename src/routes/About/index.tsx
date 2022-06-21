import Contents from 'routes/_components/Contents'
import Footer from 'routes/_components/Footer'
import styles from './about.module.scss'

const About = () => {
  return (
    <>
      <Contents>
        <section className={styles.aboutContainer}>
          <h2 className={styles.ir_su}>About</h2>
        </section>
      </Contents>
      <Footer path='about' />
    </>
  )
}
export default About
