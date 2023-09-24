import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios'
import bcrypt from 'string-encode-decode'


export const AuthContext = createContext()

const UserContext = ({children}) => {
    const [user,setUser] = useState({});
    // const [verifyCode,setVerifyCode] = useState(null)
    useEffect(()=>{
      const localData = JSON.parse(localStorage.getItem('smartCityCitizen'))
      if(localData){
        const data = {
          email:bcrypt.decode(localData.x),
          jwt: bcrypt.decode(localData.t),
          verify_code:+bcrypt.decode(localData.v)
        }
        setUser(data)
        console.log(data);
      }else{
        setUser({})
      }
    },[])

    const info = {user,setUser};
  return (
    <AuthContext.Provider value={info}>
        {children}
    </AuthContext.Provider>
  )
}

export default UserContext