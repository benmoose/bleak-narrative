import RichText from '../richText'
import CaptionIcon from '../../public/icons/triangle-up.svg'
import styles from './photoWithCaption.module.css'

const PhotoWithCaption = ({ image, caption, onPhotoClick }) => {
  return (
    <section className={styles.container}>
      <div className={styles.galleryItem}>
        <div className={styles.imgContainer}>
          <a onClick={onPhotoClick}>
            <img src={image.url} alt={image.alt} className={styles.img} />
          </a>
        </div>
        {
          caption && caption.length > 0 && (
            <div className={styles.captionContainer}>
              <img className={styles.captionIcon} src={CaptionIcon} />
              <RichText content={caption} />
            </div>
          )
        }
      </div>
    </section>
  )
}

export default PhotoWithCaption
