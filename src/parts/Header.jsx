import '../App.css';
import logo1 from '../images/logo1.png'

const Header = () => {
   return (
      <header class="header">
        <a href=" " class="header__logo link" >
            <img src={logo1} alt="Лого" width={32} height={32}/>
            <h1 class="header__title">Spotify</h1>
        </a>

        <nav class="header__navigation">
            <a href="/" class="acount acount_link">Аккаунт</a>
        </nav>
      </header>
   )
}

export default Header;