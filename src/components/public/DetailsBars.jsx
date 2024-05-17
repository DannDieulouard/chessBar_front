import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const DetailsBar = () => {
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
    <main>
      <h1>Détail du bar : </h1>

      {bar ? (
        <>
          <h2>{bar.name}</h2>

          <p>Adresse : {bar.address}</p>

          <p>Site internet : {bar.website}</p>

          <p>Contact : {bar.phone}</p>

        </>
      ) : (
        <h2>Bar non trouvé</h2>
      )}
    </main>
  );
};

export default DetailsBar;