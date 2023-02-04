import React, {useContext, useState, useEffect} from "react";

import { auth} from '../utils/Firebase'


export function useAuth() {
    return useContext(React.createContext())
}

export default function AuthProvider({children}) {
    const [currentUser, setUser] = useState()
    function signup(email, password){
        return auth.createUserWithEmailAndPassword(email, password)
    }
    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }
    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged(user => {

        })
    })
}