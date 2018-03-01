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
    <style jsx global>{`
      body {
        background-color: #f7ccc7;
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

      .markdown h3 {
        margin: 0;
        padding: 0;
        text-transform: uppercase;
      }
   `}</style>
  </div>
)

export default Layout
