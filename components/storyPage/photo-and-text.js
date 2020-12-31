import RichText from '../richText'
import styles from './photo-and-text.module.css'

const PhotoAndText = ({ item }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src={item.image.url} className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <RichText content={item.text} />
      </div>
    </div>
  )
}

export default PhotoAndText
