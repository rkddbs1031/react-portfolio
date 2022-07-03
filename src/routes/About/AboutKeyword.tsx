import { SUB_KEYWORD, KEYWORD } from 'utils/about'
import AboutImg from 'assets/img/about_sub2.jpg'
import styles from './about.module.scss'

const AboutKeyword = () => {
  return (
    <section className={styles.section3}>
      <div className={styles.container}>
        <h2>MY KEYWORD</h2>
        <div className={styles.titleContainer}>
          <div className={styles.imgWrap}>
            <img src={AboutImg} alt='about_img2' />
          </div>
          <div className={styles.subKeyword}>
            {SUB_KEYWORD.map((item) => (
              <p className={styles[`subKeyword${item.id}`]} key={item.id}>
                {item.p}
                <span>{item.span}</span>
              </p>
            ))}
          </div>
        </div>
        <div className={styles.keyword}>
          <h3>
            My Keyword
            <span>: I&rsquo;LL TELL YOU ABOUT ME</span>
          </h3>
          <ul className={styles.keywordContainer}>
            {KEYWORD.map((item) => (
              <li key={item.id}>
                <dl>
                  <dd>
                    <span>0{item.id}</span>
                    {item.title}
                  </dd>
                  <dt>{item.text}</dt>
                </dl>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
export default AboutKeyword
