import RichText from '../richText'
import styles from './photoWithCaption.module.css'

const PhotoWithCaption = ({ image, caption, onPhotoClick }) => {
  return (
    <section className={styles.container}>
      <div className={styles.imgContainer}>
        <a onClick={onPhotoClick}>
          <img src={image.url} alt={image.alt} />
        </a>
      </div>
      <div className={styles.captionContainer}>
        <RichText content={caption} />
      </div>
    </section>
  )
}

export default PhotoWithCaption
