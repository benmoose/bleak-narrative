import Image from 'next/image'

import RichText from '../richText'
import styles from './photoAndText.module.css'

const PhotoAndText = ({ items, onClickHandler, urlToGalleryIndex }) => {
  return items.map((item, i) => {
    const { dimensions, url } = item.image
    const onImageClick = () => onClickHandler(urlToGalleryIndex[url])
    const ImageC = getImageComponent({ dimensions, url, onImageClick })
    return (
      <div key={i} className={styles.container}>
        <div className={styles.imgContainer}>
          <ImageC />
        </div>
        <div className={styles.textContainer}>
          <RichText content={item.text} />
        </div>
      </div>
    )
  })
}

function getImageComponent ({ url, imageAlt, onImageClick, dimensions }) {
  if (!dimensions || !dimensions.width || !dimensions.height) {
    throw Error(`image ${url} is missing required prop 'dimensions'`)
  }
  const ImgC = () => <Image width={dimensions.width} height={dimensions.height} src={url} alt={imageAlt} className={styles.image} />
  return onImageClick
    ? () => <a onClick={onImageClick}><ImgC /></a>
    : () => <ImgC />
}

export default PhotoAndText
