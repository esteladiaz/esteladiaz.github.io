import Link from 'next/link'

const Nav = () => (
<nav>
	<div className="nav-wrapper">
	<Link href="/">
		<a><img className="brand-logo right" src="/static/img/genentech.svg"/></a>
	</Link>
		<ul id="nav-mobile" className="left hide-on-med-and-down">
		<li>
			<div className="dropdown">
			<Link>
			<a>Our Company  <i class="fa fa-angle-down"></i></a>
			</Link>
				<div className="dropdown-content">
					<ul>
						<li>
							<Link href="#">
							<a>Leadership &amp; Organization</a>
							</Link>
						</li>
						<li>
							<Link href="#">
							<a>Corporate Goals</a>
							</Link>
						</li>
						<li>
							<Link href="#">
							<a>Company Policy &amp; Guidelines</a>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</li>
		<li>
			<div className="dropdown">
				<Link href="/">
				<a>Diversity &amp; Inclusion  <i class="fa fa-angle-down"></i></a>
				</Link>
				<div className="dropdown-content">
					<ul>
						<li>
							<Link href="/goals">
							<a>Goals</a>
							</Link>
						</li>
						<li>
							<Link href="/community">
							<a>Community</a>
							</Link>
						</li>
						<li>
							<Link href="/resources">
							<a>Resources</a>
							</Link>
						</li>
						<li>
							<Link href="/calendar">
							<a>Calendar</a>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</li>
		<li>
			<Link href="#">
			<a>Gene History</a>
			</Link>
		</li>
		<li>
			<Link href="#">
			<a>Giving Back</a>
			</Link>
		</li>
		<li>
			<Link href="#">
			<a>Working Globally</a>
			</Link>
		</li>
		</ul>
	</div>
</nav>
)

export default Nav
