import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo-red-desktop.svg'

function Header() {
  return (
    <header className="nav">
      {/* Logo */}
      <img src={logo} alt="kasa" className="nav__logo" />

      {/* Navigation Links */}
      <nav>
        <ul className="nav__link">
          {/* Home Link */}
          <li>
            <NavLink
              to="/"
              className={(nav) => (nav.isActive ? 'nav-active' : '')}
            >
              Accueil
            </NavLink>
          </li>
          {/* About Link */}
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
