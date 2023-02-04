import React, {useContext, useState, useEffect} from "react";

import { auth} from '../utils/Firebase'

const AuthContext = React.createContext()    
export function useAuth() {
    return useContext(React.createContext())
}

export default function AuthProvider({children}) {
    const [currentUser, setUser] = useState()
    const [loading, setLoading] = useState(true)
    function signup(email, password){
        return auth.createUserWithEmailAndPassword(email, password)
    }
    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }
    useEffect(()=>{
        const authsubscribe = auth.onAuthStateChanged(user => {
            setUser(user)
            setLoading(false)
        })
        const subscription = authsubscribe.subscribe()
        return () => {
            subscription.unsubscribe()
        }
    }, [])

    const userValues = {
        currentUser,
        signup,
        login
    }

    return (
        <div>
            <AuthContext.Provider value={userValues}>
                {!loading && children}
            </AuthContext.Provider>
        </div>
    )
}