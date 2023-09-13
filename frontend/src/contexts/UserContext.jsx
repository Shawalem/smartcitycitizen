import React, { createContext, useEffect, useState } from 'react'


export const AuthContext = createContext()

const UserContext = ({children}) => {
    const [user,setUser] = useState({});
    useEffect(()=>{
      
    },[])

    const info = {user,setUser};
  return (
    <AuthContext.Provider value={info}>
        {children}
    </AuthContext.Provider>
  )
}

export default UserContext