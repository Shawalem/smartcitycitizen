import React, { createContext, useState } from 'react'


export const AuthContext = createContext()

const UserContext = ({children}) => {
    const [user,setUser] = useState({})
    console.log(user);

    const info = {user,setUser};
  return (
    <AuthContext.Provider value={info}>
        {children}
    </AuthContext.Provider>
  )
}

export default UserContext