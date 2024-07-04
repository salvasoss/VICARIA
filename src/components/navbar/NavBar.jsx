import "./navbar.scss"
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
        <div>
            <header>



                {/* <nav className="navbar">
                    <ul className="navItems">
                    <li> <img src="../img/LOGO VICARIA PNG.png" alt="logo sella grietas vicaria" className="logo" /></li>
                        <li> <a href="">Productos </a> </li>
                        <li>  <a href=" "> Contacto</a> </li>
                        <li> <a href=" "> Consejos de uso</a> </li>
                        <li>  <a href=" "> Acerca de Vicaria</a>  </li>
                    </ul>
                </nav> */}

                <div className="navbarAnnouncement">
                    <h3> ¡ENVIOS A TODO EL PAIS!</h3>
                </div>

                <nav className="navbar navbar-expand-lg nav">
                    <a className="navbar-brand logo" href="#">
                        <img src="../img/LOGO VICARIA PNG.png" alt="logo sella grietas vicaria" className="logo" />
                    </a>

                    <button className="navbar-toggler hamburgerMenu" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse ulContainer" id="navbarNav">
                        <ul className="navbar-nav navbarUl">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Productos </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contacto</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Acerca de Vicaria</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"> Canales de Venta</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <video autoPlay loop muted className="videoFondo">
                    <source src="./videos/videofondoazul.mp4    " type="video/mp4" />
                </video>
            </header>
        </div>
    )
}