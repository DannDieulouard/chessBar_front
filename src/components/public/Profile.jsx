import { useState, useEffect } from "react";

const Profile = () => {
  const [user, setUser] = useState(null);

  // pour l'instant, on est sur du "modifier un profil" et non pas "consulter" (get)
  useEffect(() => {
    fetch("http://localhost:5000/api/users/profile", {
      method: "PUT",
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
      <h1>Vos informations personnelles </h1>

      {user ? (
        <>
          <h2>{user.surname}</h2>
          <h2>{user.name}</h2>

        </>
      ) : (
        <h2>User non trouvé</h2>
      )}
    </main>
  );
};

export default Profile;