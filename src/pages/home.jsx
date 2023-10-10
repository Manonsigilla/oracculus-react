import Header from "../components/header";
import { Link } from "react-router-dom";
import "../css/style.css"
import Signe from "../assets/images/Signe-capricorne.png"

function Home(){
    return (
        <div>
            <Header />
            <main>
                <section>
                    <div className="signes">
                        <Link to="#" className="prev-signe">Sagittaire <span>22 NOV AU 21 DEC</span></Link>
                        <Link to="#" className="next-signe">Cancer <span>22 NOV AU 21 DEC</span></Link>
                    </div>

                    <article className="horoscope">
                        <p id="dateJour">-- HOROSCOPE DU 28/09/2023</p>
                        <h1 id="signe"></h1>
                        <span id="date">DU 22 DECEMBRE AU 20 JANVIER</span>
                        <div className="horoscope-description">
                            <p id="amour"><span>Amour :</span></p>
                            <p id="travail"><span>Travail :</span></p>
                            <p id="argent"><span>Argent :</span></p>
                            <p id="santé"><span>Santé :</span></p>
                            <p id="famille"><span>Famille et amis :</span></p>
                            <p id="conseil"><span>Conseil :</span></p> 
                        </div>
                    </article>

                </section>
                <aside>
                    <img id="image" src={Signe} alt="Capricorne" />
                </aside>
            </main>
        </div>
    );
}

export default Home;