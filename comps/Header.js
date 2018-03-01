import Link from 'next/link'
import Markdown from 'react-markdown'

const linkStyle = {
  marginRight: 15,
  fontFamily: 'Roboto Mono'
}

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
  </div>
)

export default Header
