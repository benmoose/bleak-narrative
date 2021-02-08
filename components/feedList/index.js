import React from 'react'

import styles from './feedList.module.css'
import FeedLink from './feedItem'

const FeedList = ({ documents, title, desc, minimal }) => {
  const Feed = documents.map(item => (
    <FeedLink
      key={item.uid}
      uid={item.uid}
      type={item.type}
      document={item}
      minimal={minimal}
    />
  ))

  return (
    <>
      {title && title}
      {desc && <div className={styles.desc}>{desc}</div>}
      {Feed}
    </>
  )
}

export default FeedList
