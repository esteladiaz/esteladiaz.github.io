import Header from './Header'

const layoutStyle = {
  margin: 50,
  padding: 50,
  border: '1px solid #DDD'
}

const Layout = (props) => (
  <div>
    <Header />
    {props.children}
    <img className="banana" src="/static/img/banana.png"/>
    <style jsx global>{`
      div.nav {
        position: relative;
        text-align: center;
        margin-top: 30px;
      }
      .nav > a {
        color: black;
        text-transform: uppercase;
        letter-spacing: 1px;
        margin-right: 20px;
        font-family: 'Roboto Mono';
        text-decoration: none;
      }
      .aboutLink {
        text-decoration: underline;
        font-weight: 900;
        color: black;
      }
      .social {
        height: 50px;
      }
      div.social > a {
        color: black;
        margin-right: 20px;
        font-family: 'Roboto Mono';
        text-decoration: none;
      }
      body {
        background-color: #f7ccc7;
        font-family: 'Roboto', sans-serif;
      }
      .markdown {
        font-family: 'Roboto', sans-serif;
      }

      .markdown a {
        text-decoration: none;
        color: blue;
        font-family: 'Roboto Mono', sans-serif;
      }

      .markdown a:hover {
        opacity: 0.6;
      }
      .hero {
        padding: 50px;
      }
      .markdown h3 {
        margin: 0;
        padding: 0;
        text-transform: uppercase;
      }
      .banana {
         height 500px;
         position: absolute;
         top: 20%;
         left: 40%;
      }
   `}</style>
  </div>
)

export default Layout
