import React, { createContext, useEffect, useState } from "react";
import bcrypt from "string-encode-decode";

export const AuthContext = createContext();

const UserContext = ({ children }) => {
  const [user, setUser] = useState({});
  const [vUser, set_vUser] = useState({});
  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("smartCityCitizen"));
    const vLocalData = JSON.parse(localStorage.getItem("vSmartCityCitizen"));
    if (localData) {
      const data = {
        name: bcrypt.decode(localData.n),
        email: bcrypt.decode(localData.x),
        jwt: bcrypt.decode(localData.t),
        isVerified: localData.iv,
      };
      setUser(data);
    } else {
      setUser({});
    }
    if (vLocalData) {
      const vData = {
        email: bcrypt.decode(vLocalData.x),
        verify_code: +bcrypt.decode(vLocalData.v),
      };
      set_vUser(vData);
    } else {
      set_vUser({});
    }
  }, []);

  const info = { user, setUser, set_vUser, vUser };
  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default UserContext;
