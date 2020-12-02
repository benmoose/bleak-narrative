import c from 'classnames'

import styles from './feedFiters.module.css'
import Link from '../link'

const FeedFilters = ({ activeType }) => {
  const filters = [
    {type: undefined, name: "All"},
    {type: "cratedigging", name: "Cratedigging"},
    {type: "music", name: "DJ Sets"},
    {type: "photos", name: "Photos"},
    {type: "story", name: "Stories"},
  ]

  return (
    <div role="toolbar" className={styles.container}>
      <strong className={styles.filterTitle}>Filters</strong>
      {
        filters.map(filter => {
          return (
            <Link
              className={c(styles.filterLink, {[styles.linkActive]: filter.type === activeType})}
              href={`/${filter.type || ""}`}
            >
              {filter.name}
            </Link>
          )
        })
      }
    </div>
  )
}

export default FeedFilters
