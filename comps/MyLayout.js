import Header from './Header'
import { css } from 'glamor'

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
  </div>
)

export default Layout
