import { Link, NavLink } from "react-router-dom";
import "../css/style.css"
import logo from "../assets/images/logo-oraculus.png"
import PropTypes from 'prop-types';

function Header ({ currentIndex, handleArrowClick, horoscopeData }) {
    const handleClickLeft = () => {
        if (currentIndex > 0) {
            handleArrowClick('left');
        }
    };
    
    const handleClickRight = () => {
        if (currentIndex < horoscopeData.length - 1) {
            handleArrowClick('right');
        }
    };
    
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
                <Link className="arrow-left" to="#" onClick={handleClickLeft}><i className="fa-solid fa-chevron-left"></i></Link>
                <Link className="arrow-right" to="#" onClick={handleClickRight}><i className="fa-solid fa-chevron-right"></i></Link>
            </div>
        </header>
    );
}
Header.propTypes = {
    currentIndex: PropTypes.number.isRequired,
    handleArrowClick: PropTypes.func.isRequired,
    horoscopeData: PropTypes.array.isRequired,
}

export default Header;