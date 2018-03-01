import Layout from '../comps/MyLayout.js'
import Markdown from 'react-markdown'
import Head from 'next/head'

export default (props) => (
  <Layout>
   <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Front-End Developer based in San Francisco, CA."/>
      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:site" content="@_diazela"/>
      <meta name="twitter:title" content="Estela Diaz: Front-End Developer"/>
      <meta name="twitter:description" content="Based in San Francisco, CA. Let's build things together."/>
      <meta name="twitter:image:src" content="../statics/img/twittercard.jpg"/>
      <link href="https://fonts.googleapis.com/css?family=Roboto|Roboto+Mono" rel="stylesheet"/>
      <title>
      Estela Diaz
      </title>
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
   <style jsx global>{`
     .markdown {
       font-family: 'Roboto', sans-serif;
     }

     .markdown a {
       text-decoration: none;
       color: blue;
       font-family: 'Roboto Mono', sans-serif;
     }

     .markdown a:hover {
       opacity: 0.6;
     }

     .markdown h3 {
       margin: 0;
       padding: 0;
       text-transform: uppercase;
     }
  `}</style>
  </Layout>
)
