import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Horoscope() {
    const [horoscopeData, setHoroscopeData] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    
    useEffect(() => {
        const fetchHoroscopeData = () => {
            fetch('../data/fichier.json')
            .then(response => response.json())
            .then(data => {
                setHoroscopeData(data)
            });
            setCurrentIndex(0);
        };

        fetchHoroscopeData();
    }, []);

    const showHoroscope = () => {
        if (currentIndex >= 0 && currentIndex < horoscopeData.length) {
            const currentHoroscope = horoscopeData[currentIndex];
            return (
                <>
                    <p id="dateJour">-- HOROSCOPE DU 28/09/2023</p>
                    <h1 id="signe">{currentHoroscope.Signe}</h1>
                    <span id="date">{currentHoroscope.Date}</span>
                    <div className="horoscope-description">
                        <p id="amour"><span>Amour :</span> {currentHoroscope.Amour}</p>
                        <p id="travail"><span>Travail :</span> {currentHoroscope.Travail}</p>
                        <p id="argent"><span>Argent :</span> {currentHoroscope.Argent}</p>
                        <p id="santé"><span>Santé :</span> {currentHoroscope.Santé}</p>
                        <p id="famille"><span>Famille et amis :</span> {currentHoroscope.Famille}</p>
                        <p id="conseil"><span>Conseil :</span> {currentHoroscope.Conseil}</p>
                    </div>
                </>
            );
        } else {
            return <p>Aucun horoscope disponible</p>;
        }
    }

    const changeTop = (direction) => {
        if (direction === 'left') {
            if (currentIndex > 0) {
                setCurrentIndex(currentIndex - 1);
            } else {
                setCurrentIndex(horoscopeData.length - 1);
            }
        } else if (direction === 'right' && currentIndex < horoscopeData.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setCurrentIndex(0);
        }
    };

    return (
        <>
        <section>
            <div className="signes">
                <Link to="#" className="prev-signe" onClick={() => changeTop('left')}>Sagittaire <span>22 NOV AU 21 DEC</span></Link>
                <Link to="#" className="next-signe" onClick={() => changeTop('right')}>Cancer <span>22 NOV AU 21 DEC</span></Link>
            </div>

            <article className="horoscope">
                {showHoroscope()}
            </article>

        </section>
        <aside>
            {horoscopeData.length > 0 && (
                <img id="image" src={horoscopeData[currentIndex].Image} alt={horoscopeData[currentIndex].Signe} />

            )}
        </aside>
        </>
    );
}

export default Horoscope;