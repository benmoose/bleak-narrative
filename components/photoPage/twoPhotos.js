import CaptionIcon from '../../public/icons/triangle-up.svg'
import RichText from '../richText'
import styles from './twoPhotos.module.css'

const TwoPhotos = ({ items, onClickHandler, urlToGalleryIndex }) => {
  return items.map((item, i) => {
    return (
      <PhotoElement
        key={`${i}-${item.image_1.url}`}
        image1Alt={item.image_1.alt}
        image2Alt={item.image_2.alt}
        onImage1Click={() => onClickHandler(urlToGalleryIndex[item.image_1.url])}
        onImage2Click={() => onClickHandler(urlToGalleryIndex[item.image_2.url])}
        image1URL={item.image_1.url}
        image2URL={item.image_2.url}
        caption={item.caption}
      />
    )
  })
}

const PhotoElement = ({ image1URL, image2URL, image1Alt, image2Alt, caption, onImage1Click, onImage2Click }) => {
  const Image1 = getImageComponent({ imageURL: image1URL, imageAlt: image1Alt, onImageClick: onImage1Click })
  const Image2 = getImageComponent({ imageURL: image2URL, imageAlt: image2Alt, onImageClick: onImage2Click })
  return (
    <section className={styles.container}>
      <div className={styles.imagesContainer}>
        <div className={styles.imageContainer}>
          <Image1 className={styles.image} />
        </div>
        <div className={styles.imageContainer}>
          <Image2 className={styles.image} />
        </div>
      </div>
      {
        caption && caption.length > 0 && (
          <div className={styles.captionContainer}>
            <img className={styles.captionIcon} src={CaptionIcon} />
            <RichText content={caption} />
          </div>
        )
      }
    </section>
  )
}

function getImageComponent ({ imageURL, imageAlt, onImageClick }) {
  const ImgC = () => <img src={imageURL} alt={imageAlt} className={styles.image} />
  if (!onImageClick) {
    return ImgC
  }
  return () => (
    <button onClick={onImageClick} className={styles.imageButton}>
      <ImgC />
    </button>
  )
}

export default TwoPhotos
