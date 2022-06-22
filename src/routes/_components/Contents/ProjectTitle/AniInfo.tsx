import styles from './projectTitle.module.scss'

interface IProps {
  item: string
}

const AniInfo = ({ item }: IProps) => {
  return (
    <div className={styles.aniContainer}>
      <span>{item} &nbsp;</span>
      <span>{item} &nbsp;</span>
      <span>{item} &nbsp;</span>
      <span>{item} &nbsp;</span>
    </div>
  )
}
export default AniInfo
