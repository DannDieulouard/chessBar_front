import "../public/css/home.css";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
        <div className="intro">
            <h1>RENCONTREZ. JOUEZ. TRIOMPHEZ !</h1>
            <p>Découvrez le monde enivrant des parties de jeu amicales ChessBar ! ChessBar vous transporte dans des conditions de jeux idéales où se mêlent joueurs amateurs et confirmés. Rencontrez, jouez et triomphez de vos adversaires et remportez le titre de champion de votre ville !</p>
            <a className="subscribe" href="#">Je m'inscris !</a> 
        </div>
        
        <h2>VILLES</h2>
        <div className="villes">
            <div className="features">
                <h3>Bordeaux</h3>
                <p><Link to="/bars/details/1">L'Atelier B'</Link></p>
                <p><Link to="/bars/details/2">Le Beau Jeu</Link></p>
                <p><Link to="/bars/details/3">Le Quinte & Sens</Link></p>
                <p><Link to="/bars/details/4">O'Tiap</Link></p>
                <p><Link to="/bars/details/5">Les Broc's</Link></p>
                <p><Link to="/bars/details/6">Le Mosaic</Link></p>
                <p><Link to="/bars/details/7">Le Magnus</Link></p>
            </div>

            <div className="features">
                <h3>Paris</h3>
                    <p> Les Chaises</p>
                    <p> Arkose</p>
                    <p> La Tarverne de Fwinax</p>
                    <p> Le Duchesse</p>
                    <p> Les Grands Gamins</p>
            </div>

            <div className="features">
                <h3>Lyon</h3>
                <p> Le BarBU</p>
                <p> Bob</p>
                <p> Le Speaker</p>
                <p> Le petit Bouclard</p>
            </div>

            <div className="features">
                <h3>Nantes</h3>
                <p> Le Café de la Cité</p>
                <p> Le Bacardy</p>
            </div>

            <div className="features">
                <h3>Toulouse</h3>
                <p> Evasion</p>
            </div>

            <div className="features">
                <h3>Rennes</h3>
                <p> La Reine de Coeur</p>
                <p> Babazula</p>
            </div>

            <div className="features">
                <h3>Montpellier</h3>
                <p> Le Rebuffy</p>
            </div>

        </div>
        </>
    )
}

export default Home;