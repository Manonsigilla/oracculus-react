import { Link, NavLink } from "react-router-dom";
import "../css/style.css"
import logo from "../assets/images/logo-oraculus.png"
import PropTypes from 'prop-types';
import { useHoroscope } from "./datas";

function Header ({ horoscopeData }) {
    // on utilise le hook useContext pour récupérer le contexte
    const { currentIndex, handleArrowClick } = useHoroscope();
    const handleClickLeft = () => {
        
        if (currentIndex > 0) {
            handleArrowClick('left');
        } else {
            handleArrowClick('left', true);
        }
    };
    
    const handleClickRight = () => {
        if (currentIndex < horoscopeData.length - 1) {
            handleArrowClick('right');
        } else {
            handleArrowClick('right', true);
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
    horoscopeData: PropTypes.array.isRequired,
}

export default Header;