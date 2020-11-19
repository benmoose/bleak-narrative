import { parseISO, format } from 'date-fns'

import PageHeader from '../pageHeader'
import CratediggingTrack from './cratediggingTrack'

const CratediggingPage = ({ document }) => {
  const title = `Crate Digging ${format(parseISO(document.first_publication_date), "LLLL yyy")}`
  return (
    <main>
      <PageHeader title={title} timestamp={document.first_publication_date} />
      {
        document.data.body
          .filter(slice => slice.slice_type === "crate_digging")
          .map(slice => slice.items)
          .map(item => item.map(({ track, description }, i) => (
            <CratediggingTrack key={i} track={track} description={description} />
          )))

      }
    </main>
  )
}

export default CratediggingPage