import React from "react";
import { UserAuth } from "../context/AuthContext";

export default function LoginComponent() {
  const { user, googleSignIn, logOut} = UserAuth();
  const handleSignIn = async () => {
    try {
      await googleSignIn();
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main>
      <button className="bg-red-500" onClick={handleSignIn}>Login</button>
    </main>
  );
}
