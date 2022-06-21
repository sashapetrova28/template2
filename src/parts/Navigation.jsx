/* eslint-disable jsx-a11y/anchor-is-valid */
import '../App.css';
import home1 from '../images/home1.svg';
import search1 from '../images/search1.svg';
import library from '../images/library.svg';
import createPlaylist from '../images/createPlaylist.svg';
import fav from '../images/fav.svg'

const Navbar = () => {
   return (
      <nav className="navigation">
         <ul className="element__list">
         <li className="nav__element"> 
            <a href="#" className="nav__link active">
               <img className="nav__img" src={home1} alt="img" />
               <span className="nav__title">Главная</span>
            </a>
         </li>
         <li className="nav__element"> 
            <a href="#" className="nav__link active">
               <img className="nav__img" src={search1} alt="img" />
               <span className="nav__title">Поиск</span>
            </a>
         </li>
         <li className="nav__element"> 
            <a href="#" className="nav__link active">
               <img className="nav__img" src={library} alt="img" />
               <span className="nav__title">Моя медиатека</span>
            </a>
         </li>
         </ul>

         <ul className="element__list">
         <li className="nav__element"> 
            <a href="#" className="nav__link active">
               <img className="nav__img" src={createPlaylist} alt="img" />
               <span className="nav__title">Создать плейлист</span>
            </a>
         </li>
         <li className="nav__element"> 
               <a href="#" className="nav__link active">
               <img className="nav__img" src={fav} alt="img" />
               <span className="nav__title">Любимые треки</span>
            </a>
            </li>
         </ul>
      </nav>
   )
}

export default Navbar;