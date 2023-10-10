import Header from "../components/header";
import "../css/style.css"
import Horoscope from "../components/horoscope";
import { useState, useEffect } from "react";

function Home(){
    const [horoscopeData, setHoroscopeData] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleArrowClick = (direction) => {
        if (direction === 'left') {
            if (currentIndex > 0) {
                setCurrentIndex(currentIndex - 1);
            }
        } else if (direction === 'right' && currentIndex < horoscopeData.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    }

    useEffect(() => {
        const fetchHoroscopeData = () => {
            fetch('../data/fichier.json')
            .then(response => response.json())
            .then(data => {
                setHoroscopeData(data)
            });
        };
        fetchHoroscopeData();
    }, []);

    return (
        <div>
            <Header 
            currentIndex={currentIndex}
            handleArrowClick={handleArrowClick}
            horoscopeData={horoscopeData} />
            <main>
                <Horoscope 
                currentIndex={currentIndex}
                horoscopeData={horoscopeData}
                handleArrowClick={handleArrowClick} />
            </main>
        </div>
    );
}

export default Home;