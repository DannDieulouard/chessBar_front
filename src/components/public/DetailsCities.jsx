import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const DetailsCities = () => {
    const [bars, setBars] = useState([]);

    useEffect(() => {
      fetch("http://localhost:5000/api/bars/", {
        method: "GET",
      })
        .then((response) => {
          return response.json();
        })
        .then((barsData) => {
          setBars(barsData.data);
        });
    }, []);
  
    return (
      <main>
        <section>
          {bars.map((bar) => {
            return (
              <article key={bar.id}>
                <h2>{bar.name}</h2>
                <Link to={`/bars/details/${bar.id}`}>Voir le détail du bar</Link>
              </article>
            );
          })}
        </section>
      </main>
    );
  };

export default DetailsCities;