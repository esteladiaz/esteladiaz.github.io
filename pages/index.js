import Layout from '../comps/MyLayout.js'
// import Markdown from 'react-markdown'
import Metadata from '../comps/Metadata.js'
import Head from 'next/head'


export default (props) => (
  <Layout>
    <Metadata />
   <h1>{props.url.query.title}</h1>

   <img className="banana" src="/static/img/banana.png"/>
   <style jsx>{`
   .banana {
      height 500px;
      position: absolute;
      top: 20%;
      left: 40%;
   }
`}   </style>
  </Layout>
)
