import "../public/css/concept.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { Galleria } from 'primereact/galleria';
import { PhotosConcept } from './service/PhotosConcept';

const Concept = () => {
    const [images, setImages] = useState(null);

    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '960px',
            numVisible: 4
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    useEffect(() => {
        PhotosConcept.getImages().then(data => setImages(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />
    }

    const thumbnailTemplate = (item) => {
        return <img src={item.thumbnailImageSrc} alt={item.alt} style={{ display: 'block' }} />
    }

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
                <p className="subscribe"> <Link to="/tournaments">Je m'inscris</Link></p> 
            </div>
            <div className="card">
            <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={3} circular style={{ maxWidth: '420px' }}
                item={itemTemplate} thumbnail={thumbnailTemplate} />
            </div>
        </>
    )
}

export default Concept;