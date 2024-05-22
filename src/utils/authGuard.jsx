import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

// vérifie la validité du token depuis la partie "front"
export const useVerifyToken = () => {
  const navigate = useNavigate();

  const accessToken = Cookies.get("access_token");

  let decodedToken = null;

  if (accessToken) {
    decodedToken = jwtDecode(accessToken);

    if (!decodedToken.userId) {
      navigate("/login");
    }
  } else {
    navigate("/login");
  }

  return decodedToken;
};