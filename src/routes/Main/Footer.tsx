import { INFO, SOCIAL_INFO } from 'utils/footer'
import styles from './main.module.scss'

const Footer = () => {
  return (
    <footer className={styles.mainFooter}>
      <h2>React.</h2>
      <ul className={styles.info}>
        {INFO.map((item) => (
          <li key={item.id}>{item.em}</li>
        ))}
      </ul>
      <ul className={styles.social}>
        {SOCIAL_INFO.map((item) => (
          <li key={item.id}>
            <a href={item.href} target='_blank' rel='noreferrer'>
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  )
}

export default Footer
