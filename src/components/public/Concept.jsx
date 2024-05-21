import "../public/css/concept.css";
import ConceptCarousel from "./ConceptCarousel";

const Concept = () => {
    return (
        <>
            <div className="concept">
                <h1>QUI SOMMES-NOUS ?</h1>

                <p>Grâce à l’essor de la pratique, lié notamment à la période de Covid-19 et de la série « The Queen’s Gambit » de Netflix ; le concept de ChessBar est né du constat que beaucoup de personnes amateures du jeu d’échecs n’osent pas forcément ouvrir les portes d’un club et ne connaissent pas nécessairement d’autres joueurs pour réaliser des parties amicales.</p>
                <p>
                Toutefois, grâce à ChessBar, des créneaux de jeux de 2 heures deviennent disponibles et il est possible de rencontrer des nouveaux adversaires avec des pendules et des échiquiers à disposition. Un système de classement et de points est mis en place tous les 3 mois afin de donner du challenge !
                </p>
                <p>
                Devenez le champion de votre bar et de votre ville !
                </p>
            </div>

            <ConceptCarousel />
        </>
    )
}

export default Concept;