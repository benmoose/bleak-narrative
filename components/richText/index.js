import React from 'react'
import PrismicDOM from 'prismic-dom'
import styles from './richText.module.css'

function linkResolver (doc) {
  if (doc.isBroken) {
    return ''
  }
  return `/${doc.type}/${doc.uid}`
}

const RichText = ({ content }) => {
  return (
    <div
      className={styles.container}
      dangerouslySetInnerHTML={{ __html: PrismicDOM.RichText.asHtml(content, linkResolver) }}
    />
  )
}

export default RichText
