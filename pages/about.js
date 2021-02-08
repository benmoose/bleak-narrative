import Banner from '../public/img/toilet-doodle.png'

const AboutPage = () => {
  return (
    <main>
      <div styles={{ height: '260px' }}>
        <img src={Banner} style={{ width: '100%', height: '260px', objectFit: 'contain', margin: '0 auto 30px', display: 'block' }} />
      </div>
      <h2>HELLO!</h2>
      <p><strong>Bleak Narrative is a borderless platform showcasing electronic music, visual arts, and stories from the underground club scene.</strong></p>
      <p>We say a big F OFF <strong>(!!)</strong> to the ever-pretentious conventionalism that the bourgeoisie of the electronic club scene represents. Instead, we are a progressive clusterfuck all about solidarity and feeding the world with lots and LOTS of doodles.</p>
      <p>Our platform is made by and for queers. We’re radical and inclusive, fighting the oppressive practices that historically have been (and still are) exercised against us by broadcasting voices from the LGBTQIA+ community, our allies, minorities, and other underrepresented groups. Together we can continue the fight for queer liberation.</p>
      <p>Everything published via Bleak Narrative’s channels is original content. If you want to get featured or collaborate with us in any way <span className='rainbow-text'>(or just tell us how sexy we are)</span>, send us a sweet lil message, and we’ll figure something out.</p>
      <p>– Bleak Narrative Crew</p>
    </main>
  )
}

export default AboutPage
