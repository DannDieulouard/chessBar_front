import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useVerifyToken } from "../../utils/authGuard";

const UpdateBar = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const [bar, setBar] = useState(null);

  useVerifyToken();

  useEffect(() => {
    fetch("http://localhost:5000/api/bars/" + id, {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((barData) => {
        setBar(barData.data);
      });
  }, []);

  const handleUpdateBar = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const priceHour = event.target.priceHour.value;
    const priceDay = event.target.priceDay.value;
    const priceMonth = event.target.priceMonth.value;
    const number = event.target.number.value;
    const street = event.target.street.value;
    const postCode = event.target.postCode.value;
    const city = event.target.city.value;
    const superficy = event.target.superficy.value;
    const capacity = event.target.capacity.value;

    const barData = {
      name: name,
      price: {
        hour: priceHour,
        day: priceDay,
        month: priceMonth,
      },
      address: {
        number: number,
        street: street,
        postCode: postCode,
        city: city,
      },
      superficy: superficy,
      capacity: capacity,
    };

    const barDataJson = JSON.stringify(barData);

    fetch("http://localhost:5000/api/bars/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: barDataJson,
      credentials: "include",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        navigate("/admin/bars");
      });
  };

  return (
    <>
      <h2>Modifier le bar</h2>

      {bar && (
        <form onSubmit={handleUpdateBar}>
          <div>
            <label>
              Nom
              <input type="text" name="name" defaultValue={bar.name} />
            </label>
          </div>
          <div>
            <label>
              Prix à l'heure
              <input type="text" name="priceHour" defaultValue={bar.price.hour} />
            </label>
          </div>
          <div>
            <label>
              Prix au jour
              <input type="text" name="priceDay" defaultValue={bar.price.day} />
            </label>
          </div>
          <div>
            <label>
              Prix au mois
              <input type="text" name="priceMonth" defaultValue={bar.price.month} />
            </label>
          </div>
          <div>
            <label>
              Numéro de rue
              <input type="number" name="number" defaultValue={bar.address.number} />
            </label>
          </div>
          <div>
            <label>
              Rue
              <input type="text" name="street" defaultValue={bar.address.street} />
            </label>
          </div>
          <div>
            <label>
              Code postal
              <input type="text" name="postCode" defaultValue={bar.address.postCode} />
            </label>
          </div>
          <div>
            <label>
              Ville
              <input type="text" name="city" defaultValue={bar.address.city} />
            </label>
          </div>
          <div>
            <label>
              Superficie
              <input type="number" name="superficy" defaultValue={bar.superficy} />
            </label>
          </div>
          <div>
            <label>
              Capacité
              <input type="number" name="capacity" defaultValue={bar.capacity} />
            </label>
          </div>

          <input type="submit" value="Mettre à jour" />
        </form>
      )}
    </>
  );
};

export default UpdateBar;