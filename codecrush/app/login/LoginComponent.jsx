import React from "react";
import { UserAuth } from "../context/AuthContext";
import Request from "../helpers/Request";

export default function LoginComponent() {
  const { user, googleSignIn, logOut} = UserAuth();
  const handleSignIn = async () => {
    try {
      await googleSignIn();
      
    } catch (error) {
      console.log(error);
    }
  };
  console.log(user);

 
  return (
    <main>
      <button className="bg-red-500" onClick={handleSignIn}>Login</button>
    </main>
  );
}
