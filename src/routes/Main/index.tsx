import Contents from 'routes/_components/Contents'
import Footer from './Footer'
import styles from './main.module.scss'

const Main = () => {
  return (
    <>
      <Contents>
        <section className={styles.mainContainer}>
          <div className={styles.left}>left</div>
          <div className={styles.right}>right</div>
        </section>
      </Contents>
      <Footer />
    </>
  )
}
export default Main
