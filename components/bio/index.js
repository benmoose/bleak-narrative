import Image from 'next/image'
import c from 'classnames'

import styles from './bio.module.css'

const Bio = ({ img, children, title, subtitle }) => {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.img}>
          <Image width={400} height={400} className={c('image', styles.img)} src={img} />
        </div>
        <h3 className={styles.title}>{title}</h3>
        <h4 className={styles.subtitle}>{subtitle}</h4>
      </div>
      {children}
    </section>
  )
}

export default Bio
