import Link from 'next/link'
import Markdown from 'react-markdown'

// const styles = {
//   marginRight: 15,
//   fontFamily: 'Roboto Mono',
//   textDecorationLine: 'none'
// }

const Header = () => (
  <div>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/about">
      <a>Work</a>
    </Link>
    <Link href="/work">
      <a>About</a>
    </Link>
  </div>
)

export default Header
