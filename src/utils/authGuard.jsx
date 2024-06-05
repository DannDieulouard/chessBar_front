import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export const useVerifyToken = () => {
  const navigate = useNavigate();
  const accessToken = Cookies.get("access_token");

    if (!accessToken) {
      navigate ("/login")
  } else {
    try {
      const decodedToken = jwtDecode(accessToken);
      
      if(decodedToken.roleId === 3) {
        navigate("/")
        return decodedToken;
      }
      return decodedToken;
    } catch (error) {
  navigate("/login")
          }
        }
    }
