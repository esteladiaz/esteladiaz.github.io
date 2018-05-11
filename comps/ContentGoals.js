import Link from 'next/link'

const ContentGoals = () => (
	<div className="container">
    <h1>Goals</h1>
    	<section>
		<div className="full">
			<div className="left">
				<p>
				To make meaningful and sustainable progress on diversity and inclusion, we set goals at three levels to foster a top-down and a grassroots approach. This makes it possible for Genentech to address the broad spectrum of employee diversity and utilize a wealth of resources.
				</p>
			</div>
			<div className="right">
				<div>
					<h3>COMMUNITY LINKS</h3>
					<Link href="#">
						<a>Share your D&amp;I story</a>
					</Link>
					<Link href="#">
						<a>Join a DNA Group</a>
					</Link>
				</div>
			</div>
		</div>
		<div className="full">
			<div className="left">
				<div className="card">
					<h3>Genentech Diversity Goals</h3>
					<p>Focus on expanding the population of women qualified for leadership positions at Genentech. Our Gender Diversity Strategy guides our enterprise and functional efforts to achieve this goal. Functional Diversity Goals: Set by each business unit's leadership team, these goals reflect the organizational priorities of that area, while supporting the achievement of the Genentech's current focus on gender diversity. These goals can be found on the functional websites or by asking your functional leadership team member. Support Genentech's focus on women in leadership, functional diversity plans, and address all corporate diversity issues related to recruitment, development, and retention.</p>
				</div>
			</div>
			<div className="middle">
				<div className="card">
				<h3>Diversity &amp; Inclusion (D&amp;I) Department Goals</h3>
					<p>Support the Genentech focus on women in leadership, functional diversity plans, and addresses all corporate diversity issues related to recruitment, development, and retention.</p>
				</div>
			</div>
			<div className="right">
			<div className="card">
				<h3>Affirmative Action Program &amp; Equal Employment Opportunity</h3>
					<p>AAP and EEO play an important role in diversity work at Genentech. To learn more about this and read FAQs about Affirmative Action at Genentech, see the AAP &amp; EEO tab below.</p>
				</div>
			</div>
		</div>
	</section>
  </div>
)

export default ContentGoals