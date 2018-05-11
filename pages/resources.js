import anime from 'animejs'
import Link from 'next/link'
import Head from 'next/head'
// import Markdown from 'react-markdown'
import '../style.css'
import Metadata from '../comps/Metadata.js'
import Layout from '../comps/MyLayout.js'
import ContentResources from '../comps/ContentResources.js'


export default (props) => (
  <Layout>
    <Metadata />
      <ContentResources />
  </Layout>
)