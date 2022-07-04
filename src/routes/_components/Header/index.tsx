import { NavLink } from 'react-router-dom'

import { cx } from 'styles'
import GNB from './GNB'
import styles from './header.module.scss'

const Info = [
  {
    id: 1,
    href: 'mailto:rkddb1031@naver.com',
    text: '→ rkddb1031@naver.com',
  },
  {
    id: 2,
    href: 'tel:010-9198-4389',
    text: '+ 82 9198 4389',
  },
]

interface IProps {
  keyword?: string
}

const Header = ({ keyword }: IProps) => {
  return (
    <header
      className={cx(
        styles.header,
        { [styles.about]: keyword === 'about' },
        { [styles.contact]: keyword === 'contact' }
      )}
    >
      <h1>
        <NavLink to='/'>YOON.</NavLink>
      </h1>
      {keyword === 'main' && (
        <ul className={styles.info}>
          {Info.map((item) => (
            <li key={item.id}>
              <a href={item.href}>{item.text}</a>
            </li>
          ))}
        </ul>
      )}
      <GNB />
    </header>
  )
}
export default Header
