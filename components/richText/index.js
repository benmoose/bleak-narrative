import React from 'react'
import PrismicDOM from 'prismic-dom'

import styles from './richText.module.css'
import { linkResolver } from '../../utils/prismic'

const RichText = ({ content }) => {
  return (
    <div
      className={styles.container}
      dangerouslySetInnerHTML={{ __html: PrismicDOM.RichText.asHtml(content, linkResolver) }}
    />
  )
}

export default RichText
