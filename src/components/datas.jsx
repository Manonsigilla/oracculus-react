import { createContext, useState, useContext } from "react";

// on importe le fichier de données json
// import horoscopeData from "../fichier.json";

// on crée un contexte
const HoroscopeContext = createContext();

export const useHoroscope = () => {
    return useContext(HoroscopeContext);
}

// on crée un composant HoroscopeProvider qui va englober toute l'application
export const HoroscopeProvider = ({ children }) => {
    const [horoscopeData, setHoroscopeData] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleArrowClick = (direction) => {
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
    }

    return (
        <HoroscopeContext.Provider value={{ currentIndex, handleArrowClick, horoscopeData, setHoroscopeData, setCurrentIndex }}>
            {children}
        </HoroscopeContext.Provider>
    );
}

// on crée un hook pour utiliser le contexte
// const useHoroscope = () => useContext(HoroscopeContext);

// export { HoroscopeProvider, useHoroscope };