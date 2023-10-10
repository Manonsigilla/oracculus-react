import { Link, NavLink } from "react-router-dom";
import "../css/style.css"
import logo from "../assets/images/logo-oraculus.png"

function Header () {
    return (
        <header>
        <Link to="#"><img src={logo} alt="Logo Oraculus" /></Link>
        <nav>
            <ul>
                <li><NavLink className="selected" to="#">Horoscope</NavLink></li>
                <li><NavLink className="selected" to="#">À propos</NavLink></li>
                <li><NavLink className="selected" to="#">Contact</NavLink></li>
            </ul>
        </nav>

        <div className="arrow">
            <NavLink className="arrow-left" to="#"><i className="fa-solid fa-chevron-left"></i></NavLink>
            <NavLink className="arrow-right" to="#"><i className="fa-solid fa-chevron-right"></i></NavLink>
        </div>
    </header>
    )
}

export default Header;