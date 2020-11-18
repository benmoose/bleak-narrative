import React from 'react'
import PrismicDOM from 'prismic-dom'
import styles from './storyContent.module.css'

export default ({ content }) => {
  return (
    <div
      className={styles.content}
      dangerouslySetInnerHTML={{__html: PrismicDOM.RichText.asHtml(content, null)}}
    />
  )
}
