import Header from './Header'

const layoutStyle = {
  margin: 50,
  padding: 50,
  border: '1px solid #DDD'
}

const Layout = (props) => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
  </div>
)

export default Layout
