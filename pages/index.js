import Layout from '../comps/MyLayout.js'
import Markdown from 'react-markdown'
import Metadata from '../comps/Metadata.js'
import Head from 'next/head'

export default (props) => (
  <Layout>
   <Head>
    <Metadata />
   </Head>
   <h1>{props.url.query.title}</h1>
   <div className="markdown">
     <Markdown source={`
  # Hi

  I'm a Next.js app hosted with Google. I'm going to show you how awesome Estela is soon.

  ### WORK IN PROGRESS
       `}/>
     <p className="example">
     element test
     </p>
   </div>
  </Layout>
)
