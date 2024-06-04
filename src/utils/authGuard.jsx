import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const useVerifyToken = () => {
  const navigate = useNavigate();
  const accessToken = Cookies.get("access_token");


  useEffect(() => {
    if (!accessToken) {
      navigate ("/login")
  } else {
    try {
      const decodedToken = jwtDecode(accessToken);
      console.log(decodedToken)
      if(decodedToken.roleId === 3) {
        navigate("/")
      }
    } catch (error) {
  navigate("/login")
          }
        }
      }, [])
    }