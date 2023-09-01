import React from 'react'
import { UserAuth } from '../context/AuthContext'

export const UserScore = () => {
  
    const{user} = UserAuth();

  return (
    <>
    {!user ? (<p>0</p>) : (
        <p>{user[0].score}</p>
    )}
    </>
  )
}
