import styles from './contact.module.scss'

const ContactMain = () => {
  return (
    <section className={styles.section1}>
      <div className={styles.container}>
        <h2 className={styles.ir_su}>Contact</h2>
        <div className={styles.mainText}>
          <p>
            <span>If you want to talk,</span>
          </p>
          <p>
            <span>Shoot me a message</span>
          </p>
          <p>
            <span> for details.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
export default ContactMain
