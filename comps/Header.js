import Link from 'next/link'
import Markdown from 'react-markdown'
import Metadata from './Metadata.js'

const Header = () => (
  <div className="nav">
  <Metadata />
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/work">
      <a>Work</a>
    </Link>
    <Link href="/about">
      <a>About</a>
    </Link>


  </div>
)

export default Header
