import Link from 'next/link'
import styled from 'styled-components'
import Skills from './Skills.js'

const Resume = () => (
  <div>
  <Skills />
    <h1>Resume (click to download PDF)</h1>

    <h2>Education</h2>
    <h3>University of California, Santa Barbara</h3>
    <h4>Santa Barbara, CA</h4>
    <h4>B.Sc Biological Sciences, 2015</h4>
    <ul>
    <li>Coursework focused heavily on Molecular, Cell, and Develomental Biology</li>
    <li>Worster Fellowship recipient (2014): funding supported research on pesticide useage in California</li>
      <ul>
        <li>Used R, GIS to collect and visualize data</li>
      </ul>
    </ul>

    <h3>General Assembly</h3>
    <h4>Washington D.C.</h4>
    <h4>Front-End Web Development, 2016</h4>
    <ul>
    <li>Fundamentals of Front-End Web Development, focusing on creating responsive web designs and layouts</li>
    <li>Used HTML, CSS, JavaScript (ES6), and jQuery</li>
    </ul>

    <h2>Experience</h2>

    <h3>Web Developer and Content Optimization Specialist</h3>
    <h4>Zenfolio, Inc.</h4>
    <h5>Menlo Park, CA</h5>
    <h5>March 2017 - Present</h5>
    <ul>
      <li>Webmaster of Zenfolio.com</li>
      <li>Managed architecture of 9 international web localizations using the Dot Net Nuke (DNN) Content Managenment System</li>
      <li>Developed multivariate testing opportunities for UI optimization on both our client-facing marketing website and internal software</li>
      <li>Converted all high-traffic pages to custom mobile-responsive OOCSS framework</li>
    </ul>

    <h3>Communications Specialist</h3>
    <h4>Howard Hughes Medical Institute (HHMI)</h4>
    <h5>Chevy Chase, MD</h5>
    <h5>May 2016 - January 2017</h5>
    <ul>
      <li>Design, direction, and promotion of conferences, workshops, and recruitment campaigns</li>
      <li>Directed content creation and management to Janelia.org using Drupal 7</li>
      <li>Organized social media and web campaigns to engage HHMI’s scientific community</li>
      <li>Analyzed campaign performance using Google Analytics and TrackMaven</li>
    </ul>

    <h3>Research Associate</h3>
    <h4>HHMI Janelia Research Campus</h4>
    <h5>Ashburn, VA</h5>
    <h5>October 2015 - April 2016</h5>
    <ul>
      <li>Used bash shell scripting in a Unix environment to process micrograph data collected by transmission electron microscopes</li>
      <li>Developed high-resolution 3D reconstructions of single-particle macromolecules using internally-developed software</li>
    </ul>

    <h2>Affiliations</h2>
    <h3>Mentor at Hacker Fund</h3>
    <ul>
      <li>What I do for Hacker Fund</li>
    </ul>
    <h3>Member of Tech Ladies</h3>
  </div>
)

export default Resume
