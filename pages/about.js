import Layout from '../comps/MyLayout.js'
import Markdown from 'react-markdown'

export default () => (
    <Layout>
    <div className="hero">
    <div className="markdown">
      <Markdown source={`
# TL;DR on me (from [this repo](https://github.com/esteladiaz/esteladiaz.github.io))

 I taught myself how to code a while ago, and decided that that's what I like to do.

 I've been playing with React for a while, and tried fully diving in a few weeks ago.

 I could've built this with static HTML and generic routing -- but this library is too fun to lose a practice opportunity.

 I want to get my hands dirty.

 Need collaborators? I'm your gal.
        `}/>
    </div>
    </div>
    </Layout>
)
