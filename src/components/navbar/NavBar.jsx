import "./navbar.scss"
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
        <div>
            <header>
                
                <div className="navbarAnnouncement">
                    <h3> ¡ENVIOS A TODO EL PAIS!</h3>
                </div>
                
                <nav className="navbar">
                    <ul className="navItems">
                    <li> <img src="../img/LOGO VICARIA PNG.png" alt="logo sella grietas vicaria" className="logo" /></li>
                        <li> <a href="">Productos </a> </li>
                        <li>  <a href=" "> Contacto</a> </li>
                        <li> <a href=" "> Consejos de uso</a> </li>
                        <li>  <a href=" "> Acerca de Vicaria</a>  </li>
                    </ul>
                </nav>
                <video autoPlay loop muted className="videoFondo">
                    <source src="./videos/videofondoazul.mp4    " type="video/mp4"/>
                </video>
            </header>
        </div>
    )
}