import styles from './bio.module.css'

const Bio = ({ img, children, title }) => {
  return (
    <section className={styles.container}>
      <div className={styles.imgContainer}>
        <img className={styles.img} src={img} />
      </div>
      <div className={styles.bioContent}>
        <h2 className={styles.title}>{title}</h2>
        {children}
      </div>
    </section>
  )
}

export default Bio
