import { MouseEvent, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { cx } from 'styles'

import { TAB_ITEM, getContents } from 'utils/tab'

import Contents from '../_components/Contents'
import Footer from '../_components/Footer'
import styles from './project.module.scss'

interface IContentList {
  id: number
  item: string
}

const Project = () => {
  const [tabKey, setTabKey] = useState<string>('react')
  const [contentList, setContentList] = useState<IContentList[]>()
  const [hrefItem, setHrefItem] = useState<string>('react')

  const handleTabClick = (e: MouseEvent<HTMLButtonElement>) => {
    const { key } = e.currentTarget.dataset
    setTabKey(String(key))
    setHrefItem(String(key))
  }
  useEffect(() => {
    if (tabKey) setContentList(getContents(tabKey))
  }, [tabKey])

  return (
    <>
      <Contents>
        <section className={styles.projectContainer}>
          <div className={styles.tab}>
            <ul>
              {TAB_ITEM.map((item) => (
                <li key={item.id} className={cx({ [styles.isActive]: tabKey === item.key })}>
                  <button type='button' data-key={item.key} onClick={handleTabClick}>
                    {item.tab}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.tabContents}>
            <ul>
              {contentList?.map((item) => (
                <li key={item.id}>
                  <NavLink to={hrefItem}>{item.item}</NavLink>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </Contents>
      <Footer />
    </>
  )
}
export default Project
