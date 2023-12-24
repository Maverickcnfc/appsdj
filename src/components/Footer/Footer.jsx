import "./style.css"
import { NavLink } from "react-router-dom"


const Footer = () => {

    const activeLink = "nav-list__link nav-list__link--active";
    const noactiveLink = "nav-list__link";

    return (
        <footer className="footer nav">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="nav-list">
                        <li className="nav-list__item"><NavLink to="/" className={({ isActive }) => isActive ? activeLink : noactiveLink} >Главная</NavLink></li>
                        <li className="nav-list__item"><NavLink to="/blog" className={({ isActive }) => isActive ? activeLink : noactiveLink}>Блог</NavLink></li>
                        <li className="nav-list__item"><NavLink to="/galary" className={({ isActive }) => isActive ? activeLink : noactiveLink}>Галерея</NavLink></li>
                        <li className="nav-list__item"><NavLink to="/music" className={({ isActive }) => isActive ? activeLink : noactiveLink}>Музыка</NavLink></li>
                        <li className="nav-list__item"><NavLink to="/contact" className={({ isActive }) => isActive ? activeLink : noactiveLink}>Контакты</NavLink></li>
                    </ul>



                    <div className="copyright">
                        <p>© 2024 djsserov.mahost.ru</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;