import Link from 'next/link'

import Logo from '../../public/img/bleak-logo.png'
import BleakStrip from '../../public/img/bleak-strip.png'
import styles from './pageFooter.module.css'

const PageFooter = () => {
  const copywriteYear = new Date().getFullYear()
  return (
    <div className={styles.container}>
      <img className={styles.footerImage} src={BleakStrip} />
      <div className={styles.contentContainer}>
        <ul className={styles.footerLinks}>
          <li><strong>Copywrite © {copywriteYear} Bleak Narrative</strong></li>
          <li>
            <Link href="/privacy"><a>Contact</a></Link>
          </li>
          <li>
            <Link href="/privacy"><a>Privacy</a></Link>
          </li>
        </ul>
        <div className={styles.footerLogoContainer}>
          <img className={styles.footerLogoImage} src={Logo} />
        </div>
      </div>
    </div>
  )
}

export default PageFooter
