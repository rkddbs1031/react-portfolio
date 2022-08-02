import { NavLink } from 'react-router-dom'

import { useEffect, useState } from 'hooks'
import { FOOTER_INFO, getFooterTop, FOOTER_SOCIAL } from 'utils/footer'
import { IFotoerTop } from 'types/projects'

import { ArrowPrevIcon, ArrowNextIcon } from 'assets/svgs'
import styles from './footer.module.scss'

interface IProps {
  path?: string
}

const Footer = ({ path }: IProps) => {
  const [footerItems, setFooterItems] = useState<IFotoerTop[]>([])

  useEffect(() => {
    if (path) setFooterItems(getFooterTop(path))
  }, [path])

  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerTop}>
        <ul>
          {footerItems.map((item) => (
            <li key={item.id}>
              <NavLink to={item.href}>{item.text}</NavLink>
            </li>
          ))}
        </ul>
        <div className={styles.arrow}>
          <div className={styles.prev}>
            <ArrowPrevIcon />
          </div>
          <div className={styles.next}>
            <ArrowNextIcon />
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className={styles.logo}>
          <NavLink to='/'>YOON.</NavLink>
        </div>
        <div className={styles.info}>
          <ul>
            {FOOTER_INFO.map((item) => (
              <li key={item.id}>
                <em>{item.text}</em>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.right}>
          <ul className={styles.social}>
            {FOOTER_SOCIAL.map((item) => (
              <li key={item.id}>
                <a href={item.href} target='_blank' rel='noreferrer'>
                  <item.svg />
                </a>
              </li>
            ))}
          </ul>
          <p className={styles.copyright}>&copy; YOON’S REACT PORTFOLIO {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  )
}
export default Footer
