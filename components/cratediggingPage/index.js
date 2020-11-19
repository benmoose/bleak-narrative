import { parseISO, format } from 'date-fns'

import PageHeader from '../pageHeader'
import CratediggingTrack from './cratediggingTrack'

const CratediggingPage = ({ document }) => {
  const title = `Crate Digging ${format(parseISO(document.first_publication_date), "LLLL yyy")}`
  return (
    <main>
      <PageHeader
        title={title}
        timestamp={document.first_publication_date}
        authorName={document.data.author_name}
        authorLink={document.data.author_profile && document.data.author_profile.embed_url}
      />
      {
        document.data.tracks
          .map(({ track, description }, i) => (
            <CratediggingTrack key={i} track={track} description={description} />
          ))
      }
    </main>
  )
}

export default CratediggingPage
