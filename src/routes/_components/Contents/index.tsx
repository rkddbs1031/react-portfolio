import { ReactNode } from 'react'
import styles from './contents.module.scss'

interface IProps {
  children?: ReactNode
}
const Contents = ({ children }: IProps) => {
  return <main className={styles.contents}>{children}</main>
}

export default Contents
