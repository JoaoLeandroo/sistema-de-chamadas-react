"use client"

import { useState, createContext, useEffect } from "react"

export const AuthContext = createContext({})

function AuthProvider({ children }) {
    const [user, SetUser] = useState(null)

    function signIn(email, password) {
        console.log(email)
        console.log(password)
    }

    function signUp(email, password, name) {
        console.log(email)
        console.log(password)
        console.log(name)
    }

    return(
        <AuthContext.Provider
            value={{
                signed: !!false,
                user,
                signIn,
                signUp
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider

