import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../public/css/detailsbars.css";

const DetailsBars = () => {
  const { id } = useParams();
  const [bar, setBar] = useState(null);

  
  useEffect(() => {
    fetch("http://localhost:5000/api/bars/" + id, {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((barsData) => {
        setBar(barsData.data);
      });
  }, []);

  return (
    <div className="barDetail">
      {bar ? (
        <>
          <h1>{bar.name}</h1>

          <p><span className="bolded">Créneau de jeu ChessBar</span> : Tous les {bar.game_day}s à {bar.game_time} </p>

          <p><span className="bolded">Adresse</span> : {bar.address}</p>

          <p><span className="bolded">Site internet</span> : {bar.website}</p>

          <p><span className="bolded">Contact</span> : {bar.phone}</p>

          <p className="subscribe"> <Link to="/tournaments">Je m'inscris!</Link></p> 
        </>
      ) : (
        <h2>Bar non trouvé</h2>
      )}
    </div>
  );
};

export default DetailsBars;