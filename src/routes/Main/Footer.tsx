import styles from './main.module.scss'

const Info = [
  {
    id: 1,
    em: 'Front-end Developer',
  },
  {
    id: 2,
    em: 'ⓒ Yoon’s Portfolio 2021',
  },
]

const SocialInfo = [
  {
    id: 1,
    href: 'https://github.com/rkddbs1031',
    text: 'Git',
  },
  {
    id: 2,
    href: 'https://velog.io/@kxun_ii',
    text: 'Velog',
  },
  {
    id: 3,
    href: 'https://www.notion.so/4db4a75b05c34c628d6aac418a922554',
    text: 'Notion',
  },
]

const Footer = () => {
  return (
    <footer className={styles.mainFooter}>
      <h2>React.</h2>
      <ul className={styles.info}>
        {Info.map((item) => (
          <li key={item.id}>{item.em}</li>
        ))}
      </ul>
      <ul className={styles.social}>
        {SocialInfo.map((item) => (
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
