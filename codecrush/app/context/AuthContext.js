import { useContext, createContext, useState, useEffect } from "react";
import {signInWithPopup, signOut, onAuthStateChanged, GoogleAuthProvider} from "firebase/auth";
import { auth } from "../Firebase";
import Request from "../helpers/Request";


const AuthContext = createContext();
export const AuthContextProvider = ({children}) => {
const [user, setUser] = useState(null)
console.log(user);



const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
    
}
const logOut = () => {
    signOut(auth);
}
useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth,(currentUser) => {
        if (currentUser !== null) {
        console.log(currentUser)
        const createdUser = createNewUser(currentUser)
      addUser(createdUser)
    setUser(currentUser)
        }

    })
    return () => unsubscribe();
}, [user]);

const createNewUser = (user) => {
    

    const newUser = {
        "streak":0, 
        "score": 0,
        "username": user.displayName,
        "email": user.email 
    
    };
    

return newUser
}


const addUser = (newUser) => {
const request = new Request();
request.post('http://localhost:8082/api/users', newUser) 



}
return (
<AuthContext.Provider value={{user, googleSignIn, logOut}}>{children}</AuthContext.Provider>)
}
export const UserAuth = () => {
return useContext(AuthContext)
}


