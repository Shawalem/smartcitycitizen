import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "./UserContext";

export const SupportContext = createContext();

const ReportContext = ({ children }) => {
    const {user} = useContext(AuthContext);
    const [support,setSupport] = useState([])
  useEffect(() => {
    axios.get(
      `${import.meta.env.VITE_REACT_APP_URL_EXPRESS}/users?name=${
        user.name
      }&email=${user.email}`
    ).then(res=>{
        setSupport(res.data);
    })
    .catch(er=>console.log(er.message))
  }, [user]);

  const info = {support};
  return (
    <SupportContext.Provider value={info}>{children}</SupportContext.Provider>
  );
};

export default ReportContext;
