import RichText from '../richText'
import styles from './links.module.css'

const Link = ({ items }) => {
  return (
    <div>
      {items.map(({ text, url }, i) => <LinkItem key={i} text={text} link={url.url} />)}
    </div>
  )
}

const LinkItem = ({ text, link }) => {
  return (
    <a href={link} rel='nofollow' className={styles.link}>
      <div className={styles.linkContainer}>
        <RichText content={text} />
      </div>
    </a>
  )
}

export default Link
