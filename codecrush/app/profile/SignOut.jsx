import React from 'react'
import { UserAuth } from '../context/AuthContext'

export const SignOut = () => {

    const{user, googleSignIn, logOut} = UserAuth();

    const handleSignOut = async () => {
      try{await logOut()} catch(error) {console.log(error)}
    } 


  return (
    <>
    <button className="bg-red-500"onClick={handleSignOut}>Sign Out</button>
    </>
  )
}
