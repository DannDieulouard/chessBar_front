import "../public/css/footer.css";
import instagramLogo from '../../components/public/images/footer/instagram.png';
import facebookLogo from '../../components/public/images/footer/facebook.png';
import chessbarLogo from '../../components/public/images/footer/logo.svg';

const Footer = () => {

    return (
        <>
        <footer>
                <ul className="pieddepage">
                    <div className="footer_logo">
                        <img src={chessbarLogo} alt="Chessbar" className="chessbar-icon" />
                    </div>
                    <div className="instagram-button">
                        <a href="https://www.instagram.com/chess___bar/" target="_blank">
                        <img src={instagramLogo} alt="Instagram" className="instagram-icon" />
                        </a>
                     </div>
                     <div className="facebook-button">
                        <a href="https://www.facebook.com/people/ChessBar/100094132932723/?locale=fr_FR" target="_blank">
                        <img src={facebookLogo} alt="Facebook" className="facebook-icon" />
                        </a>
                     </div>
                    <li><a href="#" className="#nav1">CONDITIONS GENERALES</a></li>
                    <li><a href="#" className="#nav1">PLAN DU SITE</a></li>
                    <li><a href="#" className="#nav1">COOKIES</a></li>
                </ul>
        </footer>
        </>
    )
}


<footer>
</footer>
export default Footer;