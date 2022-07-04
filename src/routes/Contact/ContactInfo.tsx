import { CONTACT } from 'utils/contact'
import ContactImg from 'assets/img/about_sub2.jpg'
import styles from './contact.module.scss'

const ContactInfo = () => {
  return (
    <section className={styles.section2}>
      <div className={styles.container}>
        <div className={styles.imgWrap}>
          <img src={ContactImg} alt='contact_img' />
        </div>
        <div className={styles.info}>
          <h2>
            Contact Me <br />
            <em>Lee Kang Yoon</em>
          </h2>
          <ul className={styles.contactItem}>
            {CONTACT.map((item) => (
              <li key={item.id}>
                <a href={item.href}>
                  <div className={styles.icon}>
                    <item.icon />
                  </div>
                  <span>{item.text}</span>
                </a>
              </li>
            ))}
            <li>
              <span>ⓒ YOON’S REACT PORTFOLIO 2021</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
export default ContactInfo
