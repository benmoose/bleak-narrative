import RichText from '../richText'
import styles from './photoWithCaption.module.css'

const PhotoWithCaption = ({ image, caption }) => {
  return (
    <section className={styles.container}>
      <div className={styles.imgContainer}>
        <img src={image.url} alt={image.alt} />
      </div>
      <div className={styles.captionContainer}>
        <RichText content={caption} />
      </div>
    </section>
  )
}

export default PhotoWithCaption
