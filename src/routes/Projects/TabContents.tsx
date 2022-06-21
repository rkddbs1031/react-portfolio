import { NavLink } from 'react-router-dom'

import { useState, useEffect } from 'hooks'
import { getContents } from 'utils/tab'
import { IContentList } from 'types/projects'

import styles from './project.module.scss'

interface IProps {
  tabKey: string
  hrefItem: string
}

const TabContents = ({ tabKey, hrefItem }: IProps) => {
  const [contentList, setContentList] = useState<IContentList[]>()

  useEffect(() => {
    if (tabKey) setContentList(getContents(tabKey))
  }, [tabKey])

  return (
    <div className={styles.tabContents}>
      <ul>
        {contentList?.map((item) => (
          <li key={item.id}>
            <NavLink to={hrefItem}>{item.item}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TabContents
