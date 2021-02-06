import React from 'react'

import styles from './feedList.module.css'
import FeedLink from './feedItem'

const FeedList = ({ items, title, desc }) => {
  const Feed = items.map(item => (
    <FeedLink
      key={item.uid}
      uid={item.uid}
      type={item.type}
      document={item}
    />
  ))

  return (
    <>
      <h2>{title}</h2>
      <p className={styles.desc}>{desc}</p>
      {Feed}
    </>
  )
}

export default FeedList
