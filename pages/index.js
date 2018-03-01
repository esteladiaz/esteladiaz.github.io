import Layout from '../comps/MyLayout.js'
import Markdown from 'react-markdown'
import Metadata from '../comps/Metadata.js'
import Head from 'next/head'


export default (props) => (
  <Layout>
    <Metadata />
   <h1>{props.url.query.title}</h1>
   <div className="markdown">
     <Markdown source={`
  # WORK IN PROGRESS! 2/28/18

  ## Hi

  I'm a Next.js app hosted with Google. I'm going to show you how awesome Estela is soon.


       `}/>
   </div>
  </Layout>
)
