import logo from '../../assets/logo-white-desktop.svg'

function Footer() {
    return (
        <footer className='footer'>
            {/* Logo */}
            <img src={ logo } alt="kasa" />
            <p className='footer__copyright'>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer