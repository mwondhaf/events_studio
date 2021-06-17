import Header from "../components/Header/Header"
import "../css/Layout.css"

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div>
        <div>{children}</div>
      </div>
    </div>
  )
}

export default Layout
