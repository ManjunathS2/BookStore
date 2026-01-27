import React from 'react'
import { createContext, useState ,useContext } from 'react';

export const AuthContext = createContext();

function authProvider({children}) {
    const initialAuthUser= JSON.parse(localStorage.getItem("user")) || null;
    const [authUser,setAuthUser]=useState(initialAuthUser);

  return (
    <AuthContext.Provider value={[authUser,setAuthUser]}>
        {children}
    </AuthContext.Provider>
  )
}

export const useAuth=()=>useContext(AuthContext);
export default authProvider
