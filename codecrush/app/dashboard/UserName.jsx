import React from 'react'
import { UserAuth } from '../context/AuthContext'

export const UserName = () => {

    const{user} = UserAuth();

  return (
    <>
    {!user ? (<p> You are logged out</p>) : (
        <p>{user.username}</p>
    )}
    </>
  )
}
