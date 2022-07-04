import { MouseEvent } from 'react'
import { useState } from 'hooks'
import { useLoad } from 'hooks/useLoad'
import { TAB_ITEM } from 'utils/tab'
import { cx } from 'styles'

import Loading from 'routes/_components/Loading'
import Header from 'routes/_components/Header'
import TabContents from './TabContents'
import Footer from '../_components/Footer'
import styles from './projects.module.scss'

const Project = () => {
  const [tabKey, setTabKey] = useState<string>('react')
  const [hrefItem, setHrefItem] = useState<string>('react')
  const { isLoading } = useLoad()

  const handleTabClick = (e: MouseEvent<HTMLButtonElement>) => {
    const { key } = e.currentTarget.dataset
    setTabKey(String(key))
    setHrefItem(String(key))
  }

  if (isLoading) return <Loading />
  return (
    <>
      <Header />
      <section className={styles.projectContainer}>
        <h2 className={styles.ir_su}>Projects</h2>
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
        <TabContents tabKey={tabKey} hrefItem={hrefItem} />
      </section>
      <Footer path='projects' />
    </>
  )
}
export default Project
