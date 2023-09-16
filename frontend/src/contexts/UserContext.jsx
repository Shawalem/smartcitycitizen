import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios'
import bcrypt from 'string-encode-decode'


export const AuthContext = createContext()

const UserContext = ({children}) => {
    const [user,setUser] = useState({});
    useEffect(()=>{
      const localData = JSON.parse(localStorage.getItem('smartCityCitizen'))
      const data = {
        email:bcrypt.decode(localData.x),
        jwt: bcrypt.decode(localData.t)
      }
      setUser(data)
    },[])

    const info = {user,setUser};
  return (
    <AuthContext.Provider value={info}>
        {children}
    </AuthContext.Provider>
  )
}

export default UserContext