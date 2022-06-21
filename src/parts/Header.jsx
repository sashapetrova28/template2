/* eslint-disable jsx-a11y/anchor-is-valid */
import '../App.css';
import logo1 from '../images/logo1.png'

const Header = () => {
   return (
      <header className="header">
        <a href="#" className="header__logo link" >
            <img src={logo1} alt="Лого" width={32} height={32}/>
            <h1 className="header__title">Spotify</h1>
        </a>

        <nav className="header__navigation">
            <a href="#" className="acount acount_link">Аккаунт</a>
        </nav>
      </header>
   )
}

export default Header;