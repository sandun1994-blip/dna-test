import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebaseConfig";




const UserContext=createContext()



export const AuthContextProvider=({children})=>{

const [user,setUser]=useState({})
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

useEffect(()=>{
const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
console.log(currentUser);
setUser(currentUser)

})

return ()=>{
    unsubscribe()
}
},[])





    return (<UserContext.Provider value={{createUser,user}}>
        {children}
    </UserContext.Provider>)
}


export const UserAuth=()=>{

    return useContext(UserContext)
}