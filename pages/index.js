import Layout from '../comps/MyLayout.js'
import Link from 'next/link'
import Markdown from 'react-markdown'
import Metadata from '../comps/Metadata.js'
import Hero from '../comps/Hero.js'
import Social from '../comps/Social.js'
import Head from 'next/head'
import '../style.css'
import anime from 'animejs'


export default (props) => (
  <Layout>
    <Metadata />
    <div className="hiimhere">hi</div>
      <Hero />
      <Social />
  </Layout>
)
