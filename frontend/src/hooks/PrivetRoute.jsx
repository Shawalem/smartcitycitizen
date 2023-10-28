import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

const PrivetRoute = ({children}) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate()
  useEffect(()=>{
    if (!(user?.email && user?.isVerified)) {
      navigate('/login')
    }

  },[user])

  return children
};

export default PrivetRoute;
