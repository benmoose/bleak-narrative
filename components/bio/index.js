import styles from './bio.module.css'

const Bio = ({ img, children, title }) => {
  return (
    <section className={styles.container}>
      <div className={styles.imgContainer}>
        <img className={styles.img} src={img} />
      </div>
      <div className={styles.bioContent}>
        <h3 className={styles.title}>{title}</h3>
        {children}
      </div>
    </section>
  )
}

export default Bio
