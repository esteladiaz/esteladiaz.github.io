import Link from 'next/link'

const Hero = () => (
  <div className="hero">
    <h1>Hi, Im Estela.</h1>
    <h2>Im a Front-End Developer based in San Francisco, CA.</h2>
    <h3>Check back soon to see some of my work! I pushed this live with Now CLI on 2/28, and will be ready to showcase by 3/3.</h3>
    <p>Until then, read a little bit about me under the  <Link href="/about"><a className="aboutLink">about</a></Link> section.</p>
    <p>Or, follow me around the internet:</p>
   </div>
)

export default Hero
