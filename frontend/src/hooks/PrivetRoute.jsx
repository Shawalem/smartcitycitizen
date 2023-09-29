import React, { useContext } from 'react'
import { AuthContext } from '../contexts/UserContext'
import { useNavigate } from 'react-router-dom'

const PrivetRoute = ({children}) => {
    const {user} = useContext(AuthContext)
    const navigate = useNavigate()

    if(user.email && user.isVerified){
        return children
    }else{
        navigate('/login')
    }
  
}

export default PrivetRoute