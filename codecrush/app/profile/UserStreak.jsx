import React from 'react'
import { UserAuth } from '../context/AuthContext'

export const UserStreak = () => {

    const{user} = UserAuth();

  return (
    <>
    {!user ? (<p>0</p>) : (
        <p>{user[0].streak}</p>
    )}
    </>
  )
}
