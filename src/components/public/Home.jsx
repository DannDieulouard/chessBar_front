import "../public/css/home.css";

const Home = () => {
    return (
        <>
        <div class="survivez">
            <h2>RENCONTREZ. JOUEZ. TRIOMPHEZ !</h2>
            <p>Découvrez le monde enivrant des parties de jeu amicales ChessBar ! ChessBar vous transporte dans des conditions de jeux idéales où se mêlent joueurs amateurs et confirmés. Rencontrez, jouez et triomphez de vos adversaires et remportez le titre de champion de votre ville !</p>
            <a class="ensavoirplus" href="#">En savoir +</a> 
        </div>
        <h2>VILLES</h2>
        <div class="actualites">
            <div class="features">
                <h3>Bordeaux</h3>
                    <p> Le Beau Jeu</p>
                    <p> L'Atelier B</p>
                    <p> Le Quinte & Sens</p>
                    <p> O'Tiap</p>
                    <p> Le Mosaic</p>
                    <p> Les Broc's</p>
                    <p> Le Magnus</p>
            </div>

            <div class="features">
                <h3>Paris</h3>
                    <p> Les Chaises</p>
                    <p> Arkose</p>
                    <p> La Tarverne de Fwinax</p>
                    <p> Le Duchesse</p>
                    <p> Les Grands Gamins</p>
            </div>

            <div class="features">
                <h3>Lyon</h3>
                <p> Le BarBU</p>
                <p> Bob</p>
                <p> Le Speaker</p>
                <p> Le petit Bouclard</p>
            </div>
        </div>
        </>
    )
}

export default Home;