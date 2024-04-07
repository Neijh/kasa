// import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo-red-desktop.svg'
// import '../../styles/index.scss'

function Header() {
  return (
    <header className="nav">
      <img src={logo} alt="kasa" className="nav__logo" />
      <nav>
        <ul className="nav__link">
          <li>
            <NavLink
              to="/"
              className={(nav) => (nav.isActive ? 'nav-active' : '')}
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={(nav) => (nav.isActive ? 'nav-active' : '')}
            >
              A Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
