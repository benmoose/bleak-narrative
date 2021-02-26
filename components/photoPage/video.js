import styles from './onePhoto.module.css'

const Video = ({ items }) => {
  return items.map((item, i) => {
    return <VideoPlayer key={`${i}-${item.video.provider_name}`} url={item.video.embed_url} provider={item.video.provider_name} />
  })
}

const VideoPlayer = ({ url, provider }) => {
  return (
    <section className={styles.container}>
      {getVideoPlayer({ url, provider })}
    </section>
  )
}

function getVideoPlayer ({ url, provider }) {
  if (provider === 'YouTube') {
    return <YouTubePlayer url={url} />
  }

  throw Error(`No video player for provider ${provider}`)
}

const YouTubePlayer = ({ url }) => {
  const { searchParams } = new URL(url)
  const videoID = searchParams.get('v')

  if (!videoID) {
    throw Error(`Missing video ID for YouTube video '${url}'`)
  }

  return (
    <iframe
      width='100%' height='460' src={`https://www.youtube-nocookie.com/embed/${videoID}?controls=0`}
      frameBorder='0'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      allowFullScreen
    />
  )
}

export default Video
