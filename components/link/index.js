import React from 'react'
import Link from 'next/link'
import classnames from 'classnames'

import styles from './link.module.css'

const PageLink = ({ href, className, ...props }) => (
  <Link href={href}><a className={classnames(styles.link, className)} {...props}></a></Link>
)

export default PageLink
