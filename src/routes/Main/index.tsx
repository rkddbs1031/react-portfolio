import { NavLink } from 'react-router-dom'
import { MAIN_ITEM } from 'utils/main'

import Header from 'routes/_components/Header'
import Footer from './Footer'
import styles from './main.module.scss'

const Main = () => {
  return (
    <>
      <Header keyword='main' />
      <section className={styles.mainContainer}>
        <h2 className={styles.ir_su}>home</h2>
        <ul>
          {MAIN_ITEM.map((item) => (
            <li key={item.id} className={styles[item.item]}>
              <NavLink to={item.href}>
                <div className={styles.imgWrap}>
                  <img src={item.img} alt={item.item} />
                </div>
                <div className={styles.svgWrap}>
                  <item.svg />
                </div>
              </NavLink>
            </li>
          ))}
        </ul>
      </section>
      <Footer />
    </>
  )
}
export default Main
