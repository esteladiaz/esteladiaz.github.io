import Layout from '../comps/MyLayout.js'
import Link from 'next/link'
import Social from '../comps/Social.js'

export default () => (
    <Layout>
    <div className="hero">
       <h1>Adding soon!</h1>
       <p>In the meantime, check out the website I manage by day: <Link href="//en.zenfolio.com/">
             <a className="aboutLink" target="_blank">Zenfolio.com</a>
           </Link>
       </p>
       <Social />
    </div>
    </Layout>
)
