import Header from '../Header'
import Footer from '../Footer'

function Layout({ children }) {
  return (
    <div>
      {/* Header component */}
      <Header />
      {/* Main content */}
      <main>{children}</main>
      {/* Footer component */}
      <Footer />
    </div>
  )
}

export default Layout
