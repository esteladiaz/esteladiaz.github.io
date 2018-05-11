import anime from 'animejs'
import Link from 'next/link'
import Head from 'next/head'
// import Markdown from 'react-markdown'
import '../style.css'
import '../materialize.css'
import '../materialize.js'
import Metadata from '../comps/Metadata.js'
import Layout from '../comps/MyLayout.js'
import ContentHome from '../comps/ContentHome.js'
import jquery from 'jquery';


export default (props) => (
  <Layout>
    <Metadata />
      <ContentHome />
  </Layout>
)
