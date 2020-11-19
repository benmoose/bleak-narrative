import React from 'react'
import PrismicDOM from 'prismic-dom'
import styles from './richText.module.css'

const RichText = ({ content }) => {
  return (
    <div
      className={styles.content}
      dangerouslySetInnerHTML={{__html: PrismicDOM.RichText.asHtml(content, null)}}
    />
  )
}

export default RichText
