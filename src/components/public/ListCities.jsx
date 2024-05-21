import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../public/css/listcities.css";

const ListCities = () => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/cities", {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((citiesData) => {
        setCities(citiesData.data);
      });
  }, []);

  return (
    <main>
        <div className="listcities">
            <h1>VILLES</h1>
        </div>
      <section>
        {cities.map((city) => {
          return (
            <article key={city.id}>
              <h2>{city.name}</h2>
              <Link to={`/bars/details/${city.id}`}>Voir le détail de la ville</Link>
            </article>
          );
        })}
      </section>
    </main>
  );
};

export default ListCities;