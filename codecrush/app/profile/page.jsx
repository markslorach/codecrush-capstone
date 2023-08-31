"use client"
import React from 'react'
import { SignOut } from './SignOut'
import { UserName } from '../dashboard/UserName'
import LightDarkSwitch from '../components/LightDarkSwitch'

export default function Profile() {
  return (
    <main>
        <h2>Profile Page</h2>
        <h3>Logo</h3>
        <UserName/>
        <LightDarkSwitch/>
        <SignOut/>
    </main>
  )
}