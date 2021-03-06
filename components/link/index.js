import React from 'react'
import Link from 'next/link'
import classnames from 'classnames'

import styles from './link.module.css'

const PageLink = ({ href, className, ...props }) => (
  <Link href={href} passHref><a className={classnames(styles.link, className)} {...props} /></Link>
)

export default PageLink
