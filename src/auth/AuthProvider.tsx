import React, { useState, createContext } from "react"

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [account, setAccount] = useState(null)

  return (
    <AuthContext.Provider value={{ account, setAccount }}>
      {children}
    </AuthContext.Provider>
  )
}
