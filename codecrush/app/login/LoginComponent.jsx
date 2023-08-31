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
      <button className="btn btn-primary" onClick={handleSignIn}>Login</button>
    </main>
  );
}
