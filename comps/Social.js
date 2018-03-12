import Link from 'next/link'

const Social = () => (
  <div className="social">
    <Link href="//twitter.com/_diazela">
     <a target="_blank"><i class="fab fa-twitter"></i></a>
    </Link>
    <Link href="//www.facebook.com/diazela">
     <a target="_blank"><i class="fab fa-facebook-f"></i></a>
    </Link>
    <Link href="//www.instagram.com/diazela/">
     <a target="_blank"><i class="fab fa-instagram"></i></a>
    </Link>
    <Link href="//github.com/esteladiaz/">
     <a target="_blank"><i class="fab fa-github"></i></a>
    </Link>
    <Link href="mailto: estela@diazela.com">
     <a target="_blank"><i class="fas fa-envelope"></i></a>
    </Link>
  </div>
)

export default Social
