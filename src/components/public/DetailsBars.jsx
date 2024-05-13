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
      .then((barData) => {

        const bar = {
          ...barData.data,
          address: JSON.parse(barData.data.address)
        }
        setBar(bar);
      });
  }, []);

  console.log(bar)

  return (
    <main>
      <h1>Détail du bar : </h1>

      {bar ? (
        <>
          <h2>{bar.name}</h2>

          <p>Adresse : {bar.address.number} {bar.address.street} {bar.address.postCode} {bar.address.city}</p>

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