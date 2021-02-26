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
import Instagram from '../public/icons/instagram.svg'

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
            <p>A Swedish goddess put on earth to ensure that people get what they want - hard techno and objective truths (the latter being a lie). I've spent most of my nightlife exploring the debauchery of Berlin, which has genuinely refined my ability to differentiate good speed from shitty speed. All "jokes" aside, I'm an explosive rave DJ and an incredible cook. So reach out if you want a taste!</p>
          </Bio>
        </Grid>

        <Grid item md={4} sm={12}>
          <Bio
            img={Elk}
            title='Elk Gerd'
            subtitle='UK, He/Him'
            url='https://soundcloud.com/elkgerd'
            icon={Soundcloud}
          >
            <p>London raver & DJ, usually found in the darkroom. Heavily inspired by the people and sounds of London's blistering illegal rave scene. Crank up the volume, grab your closest human, and scream if you wanna go faster.</p><p>Occasionally plagued by my day-drinking disco alter-ego. PS. Pretty good cook, I love them 'shrooms!</p>
          </Bio>
        </Grid>
      </Grid>

      <div style={{ margin: '30px 0' }}>
        <Image width={799} height={68} src={BleakStrip} />
      </div>

      <h2>Contributors</h2>
      <Grid container>
        <Grid item>
          <Bio
            img={Cameron}
            title='Cameron'
            subtitle='USA, He/Him'
            url='https://instagram.com/_chef.cam_'
            icon={Instagram}
          >
            <p>After studying in New Orleans, New York, and Berlin, dance floors and music are pretty ubiquitous in my life. I have always found an intense solidarity and freedom around other dancers and developed some passionate ideas about current trends in electronic music. With no one to share them with near the dance floor, I've turned to writing them down on this wonderful platform filled with wonderful people. In a past life found sharing a curb and a cigarette with a stranger; currently laying low finishing undergrad in a Brooklyn apartment and practicing DJing so I may one day utter the coveted words "I only spin vinyl.” Most likely not wearing clothes.</p>
          </Bio>
        </Grid>
      </Grid>
    </>
  )
}

export default CommunityPage
