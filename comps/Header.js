import Link from 'next/link'
import Markdown from 'react-markdown'

const styles = {
  marginRight: 20,
  fontFamily: 'Roboto Mono',
  textDecorationLine: 'none'
}

const Header = () => (
  <div>
    <Link href="/">
      <a style={styles}>Home</a>
    </Link>
    <Link href="/work">
      <a style={styles}>Work</a>
    </Link>
    <Link href="/about">
      <a style={styles}>About</a>
    </Link>

    <style jsx>{`
      a {
        color: black;
        text-transform: uppercase;
        letter-spacing: 1px;
      }
   `}</style>
  </div>
)

export default Header
