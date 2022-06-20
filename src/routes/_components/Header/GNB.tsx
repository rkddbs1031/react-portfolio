import { NavLink } from 'react-router-dom'
import styles from './header.module.scss'

const GNB_ITEMS = [
  {
    id: 1,
    item: 'Login',
    href: 'login',
  },
  {
    id: 2,
    item: 'Jojn',
    href: 'join',
  },
]

const GNB = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        {GNB_ITEMS.map((item) => (
          <li key={item.id}>
            <NavLink to={item.href}>{item.item}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default GNB
