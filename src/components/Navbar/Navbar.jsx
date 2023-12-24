import sun from "./../../images/icons/sun.svg"
import moon from "./../../images/icons/moon.svg"
import vk from "./../../images/icons/vk.svg"
import instagram from "./../../images/icons/instagram.svg"
import logo from "./../../images/icons/logo.png"
import { NavLink } from "react-router-dom"
import "./style.css"

const Navbar = () => {

    const activeLink = "nav-list__link nav-list__link--active";
    const noactiveLink = "nav-list__link";


    return (
        <nav className="nav">
            <div className="container">
                <div className="nav-row">
                    <NavLink to="/" className="logos logo">
                    <img src={logo} />
                    </NavLink>
                    
                    <button className="dark-mode-btn">
                        <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
                        <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
                    </button>

                    <ul className="nav-list">
                        <li className="nav-list__item"><NavLink to="/" className={({isActive}) => isActive ? activeLink : noactiveLink} >Главная</NavLink></li>
                        <li className="nav-list__item"><NavLink to="/blog" className={({isActive}) => isActive ? activeLink : noactiveLink}>Блог</NavLink></li>
                        <li className="nav-list__item"><NavLink to="/galary" className={({isActive}) => isActive ? activeLink : noactiveLink}>Галерея</NavLink></li>
                        <li className="nav-list__item"><NavLink to="/music" className={({isActive}) => isActive ? activeLink : noactiveLink}>Музыка</NavLink></li>
                        <li className="nav-list__item"><NavLink to="/contact" className={({isActive}) => isActive ? activeLink : noactiveLink}>Контакты</NavLink></li>
                    </ul>

                    <ul className="social">
                        <li className="social__item"><a href="#!"><img src={vk} alt="Link" /></a></li>
                        <li className="social__item"><a href="#!"><img src={instagram} alt="Link" /></a></li>
                    </ul>

                </div>

            </div>
        </nav>
    );
}

export default Navbar;