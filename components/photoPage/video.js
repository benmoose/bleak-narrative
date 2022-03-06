import styles from './onePhoto.module.css'

const YOUTUBE_URL = 'youtube.com'
const YOUTUBE_SHORT_URL = 'youtu.be'

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

function getYouTubeVideoID (youtubeUrl) {
  const { host, pathname, searchParams } = new URL(youtubeUrl)
  if (host !== YOUTUBE_URL && host !== YOUTUBE_SHORT_URL) {
    throw Error(`URL '${youtubeUrl}' is not a YouTube URL`)
  }
  if (host === YOUTUBE_SHORT_URL) {
    return pathname.slice(1)
  }
  return searchParams.get('v')
}

const YouTubePlayer = ({ url }) => {
  const videoID = getYouTubeVideoID(url)

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
