import Link from 'next/link'

const ContentCalendar = () => (
  <div className="container">
    <h1>Calendar</h1>
    <section>
		<div class="full">
			<p>The Genentech Diversity Calendar includes DNA group events, conferences sponsored by Genentech, healthcare disparities events, and service opportunities. This calendar also reflects cultural and religious events. To download a complete calendar of Global Religious and Cultural events for 2016, click here.</p>
		</div>
		<div class="full">
			<iframe src="https://calendar.google.com/calendar/embed?src=en.usa%23holiday%40group.v.calendar.google.com&ctz=America%2FLos_Angeles" width="800" height="600" frameborder="0" scrolling="no"></iframe>
		</div>
	</section>
  </div>
)

export default ContentCalendar