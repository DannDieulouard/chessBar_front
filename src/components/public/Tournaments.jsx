import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import SubscriptionForm from './SubscriptionForm';
import "../public/css/tournaments.css";

const checkCookie = (access_token) => {
    return Cookies.get(access_token) !== undefined;
};

const Tournaments = () => {
    const navigate = useNavigate();
    const [hasCookie, setHasCookie] = useState(false);
    const [tournaments, setTournaments] = useState([]);
    const [selectedTournament, setSelectedTournament] = useState(null);
    const [subscribedTournaments, setSubscribedTournaments] = useState([]);

    const handleSubscribeClick = (tournament) => {
        setSelectedTournament(tournament);
    };

    const handleFormSubmit = (userDetails) => {
        fetch(`http://localhost:5000/api/tournaments/${selectedTournament.id}/subscribe`, {
            method: 'POST',
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userDetails)
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                setSubscribedTournaments([...subscribedTournaments, { ...userDetails, tournamentId: selectedTournament.id }]);
                
                setTournaments(tournaments.map(tournament => {
                    if (tournament.id === selectedTournament.id) {
                        return data.tournament;
                    }
                    return tournament;
                }));

                setSelectedTournament(null);
            } else {
                alert(data.message);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };

    useEffect(() => {
        fetch("http://localhost:5000/api/tournaments", {
            method: "GET",
        })
            .then(response => response.json())
            .then(tournamentsData => {
                setTournaments(tournamentsData.data);
            })
            .catch(error => {
                console.error('Error fetching tournaments:', error);
            });
    }, []);

    useEffect(() => {
        const cookieExists = checkCookie('access_token');
        setHasCookie(cookieExists);
    }, []);

    return (
        <>
            {hasCookie ? (
                <div className="tournaments">
                    <h1>INSCRIPTIONS TOURNOIS</h1>
                    <h4>Un tournoi vous engage. Merci de contacter un admin pour tout désistement jusqu'à 24h avant les parties. Merci !</h4>
                    <article className="listTournaments">
                        <table>
                            <thead>
                                <tr>
                                    <th>Tournois</th>
                                    <th>Ville</th>
                                    <th>Jour et heure de jeu</th>
                                    <th>Joueurs inscrits</th>
                                    <th>Inscription</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tournaments.map((tournament) => (
                                    <tr key={tournament.id}>
                                        <td>{tournament.name}</td>
                                        <td>{tournament.city}</td> 
                                        <td>{tournament.game_day} {tournament.game_time}</td>
                                        <td>{(tournament.players || []).join(', ')}</td>
                                        <td>
                                            <button
                                                onClick={() => handleSubscribeClick(tournament)}
                                                disabled={subscribedTournaments.some(sub => sub.tournamentId === tournament.id)}
                                            >
                                                {subscribedTournaments.find(sub => sub.tournamentId === tournament.id)?.username || "S'inscrire"}
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {selectedTournament && (
                            <SubscriptionForm tournament={selectedTournament} onFormSubmit={handleFormSubmit} />
                        )}
                    </article>
                </div>
            ) : (
                <div className="tournaments">
                    <h2>Veuillez d'abord vous authentifier avant d'accéder à nos tournois !</h2>
                    <div className="tournamentAccess"><Link to="/login">Connexion</Link></div>
                </div>
            )}
        </>
    );
}

export default Tournaments;