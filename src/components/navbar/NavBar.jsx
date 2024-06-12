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
                        <li> Contacto</li>
                        <li> <img src="../img/LOGO VICARIA PNG.png" alt="logo sella grietas vicaria" className="logo" /></li>
                        <li> Productos </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}