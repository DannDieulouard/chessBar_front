import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Profile = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  
  useEffect(() => {
    fetch("http://localhost:5000/api/users/" + id, {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((usersData) => {
        setUser(usersData.data);
      });
  }, []);

  return (
    <main>
      <h1>Détail du user : </h1>

      {user ? (
        <>
          <h2>{user.name}</h2>
          <h2>{user.surname}</h2>

        </>
      ) : (
        <h2>User non trouvé</h2>
      )}
    </main>
  );
};

export default Profile;