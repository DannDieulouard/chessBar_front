import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

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