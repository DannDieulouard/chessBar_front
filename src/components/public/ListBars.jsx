import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ListBars = () => {
  const [bars, setBars] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/bars", {
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
      <h2>Les bars</h2>

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

export default ListBars;