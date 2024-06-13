import "../public/css/footer.css";
import instagramLogo from '../../components/public/images/footer/instagram.png';
import facebookLogo from '../../components/public/images/footer/facebook.png';
import chessbarLogo from '../../components/public/images/footer/logo.svg';

const Footer = () => {

    return (
        <>
        <footer>
                <div className="pieddepage">
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
                     <p>© 2024 ChessBar tous droits réservés.</p>
                </div>
        </footer>
        </>
    )
}


<footer>
</footer>
export default Footer;