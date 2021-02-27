import Image from 'next/image'

import LinkIcon from '../../public/icons/link-icon.svg'
import styles from './links.module.css'

export const LinkList = ({ items }) => {
  return (
    <div>
      {items.map(({ text, url }, i) => <LinkItem key={i} text={text} link={url.url} />)}
    </div>
  )
}

export const LinkItem = ({ type, text, link }) => {
  return (
    <a href={link} rel='nofollow' className={styles.link}>
      <div className={styles.linkContainer}>
        <div className={styles.linkIcon}>
          <Image width={26} height={26} src={LinkIcon} />
        </div>
        <span className={styles.linkType}>{type}</span>
        <strong className={styles.linkText}>{text}</strong>
      </div>
    </a>
  )
}
