import "../public/css/home.css";
import { Link } from "react-router-dom";
import Bordeaux from '../public/images/home/Bordeaux.jpg'
import Paris from '../public/images/home/Paris.jpg'
import Lyon from '../public/images/home/Lyon.jpg'
import Montpellier from '../public/images/home/Montpellier.jpg'
import Nantes from '../public/images/home/Nantes.jpg'
import Toulouse from '../public/images/home/Toulouse.jpg'
import Rennes from '../public/images/home/Rennes.jpg'

const Home = () => {
    return (
        <>
        <div className="intro">
            <h1>RENCONTREZ. JOUEZ. TRIOMPHEZ !</h1>
            <p>Découvrez le monde enivrant des parties de jeu amicales ChessBar ! ChessBar vous transporte dans des conditions de jeux idéales où se mêlent joueurs amateurs et confirmés. Rencontrez, jouez et triomphez de vos adversaires et remportez le titre de champion de votre ville !</p>
            <p className="subscribe"> <Link to="/tournaments">Je m'inscris</Link></p> 
        </div>
        <h2 className="title">VILLES</h2>
        <div className="villes">
            <div className="features">
            <img src={Bordeaux} alt="Bordeaux" />
                <h3>Bordeaux</h3>
                <p><Link to="/bars/details/1">L'Atelier B</Link></p>
                <p><Link to="/bars/details/2">Le Beau Jeu</Link></p>
                <p><Link to="/bars/details/3">Le Quinte & Sens</Link></p>
                <p><Link to="/bars/details/4">O'Tiap</Link></p>
                <p><Link to="/bars/details/5">Les Broc's</Link></p>
                <p><Link to="/bars/details/6">Le Magnus</Link></p>
                <p><Link to="/bars/details/7">Le Mosaic</Link></p>
            </div>

            <div className="features">
            <img src={Paris} alt="Paris" />
                <h3>Paris</h3>
                <p><Link to="/bars/details/8">Les Chaises</Link></p>
                <p><Link to="/bars/details/9">La Tarverne de Fwinax</Link></p>
                <p><Link to="/bars/details/10">Luppolo</Link></p>
                <p><Link to="/bars/details/11">Le Duchesse</Link></p>
                <p><Link to="/bars/details/12">Les Grands Gamins</Link></p>
            </div>

            <div className="features">
            <img src={Lyon} alt="Lyon" />
                <h3>Lyon</h3>
                <p><Link to="/bars/details/18">Bob</Link></p>
                <p><Link to="/bars/details/19">Le BarBU</Link></p>
                <p><Link to="/bars/details/20">Le petit Bouclard</Link></p>
            </div>

            <div className="features">
            <img src={Nantes} alt="Nantes" />
                <h3>Nantes</h3>
                <p><Link to="/bars/details/13">Le Café de la Cité</Link></p>
                <p><Link to="/bars/details/14">Le Bacardy</Link></p>
            </div>

            <div className="features">
            <img src={Toulouse} alt="Toulouse" />
                <h3>Toulouse</h3>
                <p><Link to="/bars/details/17">Evasion</Link></p>
            </div>

            <div className="features">
            <img src={Rennes} alt="Rennes" />
                <h3>Rennes</h3>
                <p><Link to="/bars/details/15">La Reine de Coeur</Link></p>
                <p><Link to="/bars/details/16">Le Babazula</Link></p>
            </div>

            <div className="features">
            <img src={Montpellier} alt="Montpellier" />
                <h3>Montpellier</h3>
                <p><Link to="/bars/details/21">Le Rebuffy</Link></p>
            </div>

        </div>
        </>
    )
}

export default Home;