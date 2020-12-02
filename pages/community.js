import Bio from '../components/bio'
import BleakStrip from '../public/img/bleak-strip-community.png'
import Stiborski from '../public/img/stiborski-bleak.jpg'
import Whattis from '../public/img/whattis-bleak.jpg'
import Elk from '../public/img/elk-bleak.jpg'

const CommunityPage = () => {
  return (
    <>
      <h1>Community</h1>
      <p style={{margin: "0"}}>We thrive on connections, relationships, and shared experiences. Without a sense of community, especially during these difficult times, it's hard to keep our mental health in check. We need one another to create and explore different kinds of boundaries when social distancing doesn't allow closeness in the conventional sense. This space is for you to get to know something more about the people behind Bleak Narrative, as well as our partners and collaborators. We're always open to bringing more people to join us because the more, the merrier, right?</p>
      <img src={BleakStrip} style={{margin: "25px 0", width: "100%"}} />
      <Bio
        img={Stiborski}
        title="Stiborski (Brazil)"
      >
        <p>I'm just a Brazilian dweeb who spent some time in Europe and fell in love with electronic music (30 years late to the party). After many blurry nights, unforgettable encounters, and friendships made on the dance floors, I decided to learn how to DJ. Unfortunately, now being trapped in my home country because of the pandemic, I'm unable to perform live and make new in-person connections. Bleak Narrative is my passion project, and I hope it brings joy to people during these challenging times (how cute, I almost puked). But it's true! I hope people understand what I want to achieve with this platform - that is - taking the scene somewhat lightly. Besides electronic music, I'm a film buff, world traveler (50 countries and... stopped counting because of the pandemic), and an MA student. I'm also a coffee addict and a terrible cook. Undateable.</p>
      </Bio>
      <Bio
        img={Whattis}
        title="Whattis (Germany)"
      >
        <p>A Swedish goddess put on earth to ensure that people get what they want - hard techno and objective truths (the latter being a lie). I've spent most of my nightlife in Berlin's hedonism, which has genuinely refined my ability to detect good speed from shitty speed. All "jokes" aside, I'm a DJ, a raver, a lover, and a friend who knows a good project when I see one. That's why I joined Bleak! I'm here to maintain the flow of solidarity, convey a sense of anti-establishment, and help grow the community. But I'm mostly here to have fun, of course, and make you want to have fun as well! FUN FUN. Anyway, I'm an incredible cook. So reach out if you want a taste!</p>
      </Bio>
      <Bio
        img={Elk}
        title="ELk (UK)"
      >
        <p>My story began when a first date took an unexpected turn and dumped innocent little pre-techno me right into the heart of London’s blistering underground rave scene. That night marked the first of countless memories forged by beautiful strangers and pounding beats, and began a voyage of liberation and <span style={{textDecoration: "line-through", fontStyle: "italic", textDecorationColor: "#f61003"}}>k-holes</span> *ahem*, human connection. You'll find me throwing inhuman shapes in the front row or conjuring underground sounds from behind the decks, I just want to live in the moment and give a big middle finger to convention. Although dance floors have gone quiet, the rave never stops... it’s just moved home with us ♥ and Bleak is here to support those vibes and spark new kinds of adventures with people from across the world. We’re here for you and our scene through these isolating times, and beyond 👊 x (Addendum: average cook).</p>
      </Bio>
    </>
  )
}

export default CommunityPage
