import { NavLink } from 'react-router-dom'

import GNB from './GNB'
import styles from './header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>
        <NavLink to='/'>YOON.</NavLink>
      </h1>
      {/* <ul className={styles.info}>
        {info.map((item) => (
          <li
        ))}
      </ul> */}
      <GNB />
    </header>
  )
}
export default Header
