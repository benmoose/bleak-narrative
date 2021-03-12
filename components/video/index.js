import styles from './video.module.css'

const HostedVideo = ({ items }) => {
  const videoItems = items.map(item => {
    return (
      <video key={item.video.url} className={styles.video} autoPlay loop muted controls>
        <source src={item.video.url} type='video/mp4' />
        We're sorry, your browser doesn't support this type of embedded video content.
      </video>
    )
  })

  return (
    <div className={styles.container}>
      {videoItems}
    </div>
  )
}

export default HostedVideo
