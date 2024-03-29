import Image from 'next/image'
import Link from 'next/link'
import c from 'classnames'

import styles from './bio.module.css'

const Bio = ({ img, children, title, subtitle, url, icon }) => {
  const TitleRow = url
    ? props => <Link href={url}><a className={styles.titleRow} target='_blank' rel='noreferrer' {...props} /></Link>
    : props => <div className={styles.titleRow} {...props} />

  return (
    <section>
      <div className={styles.container}>
        <div className={styles.img}>
          <Image width={400} height={400} className={c('image', styles.img)} src={img} />
        </div>

        <TitleRow>
          {
            url && (
              <Link href={url}>
                <a target='_blank' rel='noreferrer' className={styles.soundcloudIcon}>
                  <Image width={30} height={30} src={icon} alt='Soundcloud Logo' />
                </a>
              </Link>
            )
          }
          <h3 className={styles.title}>{title}</h3>
        </TitleRow>
        <h4 className={styles.subtitle}>{subtitle}</h4>
      </div>
      {children}
    </section>
  )
}

export default Bio
