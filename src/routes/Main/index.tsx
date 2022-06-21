import { NavLink } from 'react-router-dom'

import ProfileLeftImg from 'assets/img/profile_left.png'
import ProfileRightImg from 'assets/img/profile_right.png'
import { ProjectTextSvg, AboutTextSvg } from 'assets/svgs'
import Contents from 'routes/_components/Contents'
import Footer from './Footer'
import styles from './main.module.scss'

const MAIN_ITEM = [
  {
    id: 1,
    item: 'left',
    href: 'projects',
    img: ProfileLeftImg,
    svg: <ProjectTextSvg />,
  },
  {
    id: 2,
    item: 'right',
    href: 'about',
    img: ProfileRightImg,
    svg: <AboutTextSvg />,
  },
]

const Main = () => {
  return (
    <>
      <Contents>
        <section className={styles.mainContainer}>
          <ul>
            {MAIN_ITEM.map((item) => (
              <li key={item.id} className={styles[item.item]}>
                <NavLink to={item.href}>
                  <div className={styles.imgWrap}>
                    <img src={item.img} alt={item.item} />
                  </div>
                  <div className={styles.svgWrap}>{item.svg}</div>
                </NavLink>
              </li>
            ))}
          </ul>
        </section>
      </Contents>
      <Footer />
    </>
  )
}
export default Main
