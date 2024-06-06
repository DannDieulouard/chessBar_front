import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";

export const useVerifyToken = () => {

  const accessToken = Cookies.get("access_token")
  let decodedToken = null

  if (accessToken) {
      decodedToken = jwtDecode(accessToken);
  }

  return decodedToken
}