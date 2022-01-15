import Image from 'next/image'
import Grid from '@material-ui/core/Grid'

import { PageDoodle } from '../components/page'
import Bio from '../components/bio'
import Doodle from '../public/img/communitydoodle.png'
import BleakStrip from '../public/img/bleak-strip-community.png'
import Cameron from '../public/img/bleak-cameron.jpeg'
import Stiborski from '../public/img/stiborski-bleak.jpg'
import Whattis from '../public/img/whattis-bleak.jpg'
import Elk from '../public/img/elkgerd.jpg'
import Soundcloud from '../public/icons/soundcloud.svg'

const CommunityPage = () => {
  return (
    <>
      <PageDoodle src={Doodle} width={999} height={243} />
      <h2>Residents</h2>

      <Grid container spacing={3}>
        <Grid item md={4} sm={12}>
          <Bio
            img={Stiborski}
            title='Stiborski'
            subtitle='Brazil, He/Him'
            url='https://soundcloud.com/stiborski'
            icon={Soundcloud}
          >
            <p>I'm just a Brazilian dweeb who spent some time in Europe and fell in love with electronic music (30 years late to the party). After many blurry nights, unforgettable encounters, and friendships made on the dance floors, I decided to learn how to DJ. Unfortunately, now being trapped in my home country because of the pandemic, I'm unable to perform live and make new in-person connections. I'm a coffee addict and a terrible cook. Undateable.</p>
          </Bio>
        </Grid>

        <Grid item md={4} sm={12}>
          <Bio
            img={Whattis}
            title='Whattis'
            subtitle='Germany, She/Her'
            url='https://soundcloud.com/djwhattis'
            icon={Soundcloud}
          >
            <p>A Swedish goddess put on earth to ensure that people get what they want - hard techno and objective truths (the latter being a lie). When I play, the tracks go from dark to jolly, from brutal to soft, from nasty to kind before you even had the chance to say “stahp it plz”. I might look really tough, but I’m one of the softest, most genuine, funniest, hottest, and smartest people you’ll probably never meet. Sarcasm is my default defense mechanism. Text me &lt;3</p>
          </Bio>
        </Grid>

        <Grid item md={4} sm={12}>
          <Bio
            img={Cameron}
            title='Fluffi'
            subtitle='USA, He/Him'
            url='https://soundcloud.com/fluffi_er'
            icon={Soundcloud}
          >
            <p>Brooklyn based promoter, door person, dj, raver, writer, and overall good time, not necessarily in that order. Constantly enthused by my fellow dancers, I have turned to Bleak to share ideas and music with the world wide web. I love to clear the dance floor by clanging 140 bpm techno into some nu disco, most likely while not wearing clothes. Find me bouncing around Bushwick or somewhere else idk</p>
          </Bio>
        </Grid>
      </Grid>

      <div style={{ margin: '30px 0' }}>
        <Image width={799} height={68} src={BleakStrip} />
      </div>

      <h2>Backstage team</h2>
      <Grid container>
        <Grid item md={4} sm={12}>
          <Bio
            img={Elk}
            title='Elk Gerd'
            subtitle='UK, He/Him'
            url='https://soundcloud.com/elkgerd'
            icon={Soundcloud}
          >
            <p>London warehouse dweller, DJ and party organiser, Elk manages the website and techy stuff for us so we can focus on the MUSAAAC.</p>
          </Bio>
        </Grid>
      </Grid>
    </>
  )
}

export default CommunityPage
