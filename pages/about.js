import Layout from '../comps/MyLayout.js'
import Markdown from 'react-markdown'

export default () => (
    <Layout>
    <div className="markdown">
      <Markdown source={`
# # README.md (from [this repo](https://github.com/esteladiaz/esteladiaz.github.io){:target="_blank"})
 I taught myself how to code a while ago, and decided that that's what I like to do.

 I've been playing with React for a while, and tried fully diving in a few weeks ago.

 I could've built this with static HTML and generic routing -- but this framework is too fun to lose a practice opportunity.

 I want to get my hands dirty.

 Need collaborators? I'm your gal.
        `}/>
    </div>
    </Layout>
)
