"use client"
import React from 'react'

import { UserName } from './UserName'
import { PythonDifficultySelect } from './PythonDifficultySelect'



export default function Dashboard() {

  

  return (
    <main>
   
        <h2>Dashboard</h2>
        <h3 className='flex'>Hello, <UserName/></h3>
        <h3>Stats.</h3>
        <h3>Today's challenge.</h3>
        {/* <button className='p-2 bg-red-300'>Python</button> */}
        <PythonDifficultySelect/>
        <button className='p-2 bg-blue-300'>JavaScript</button>
    </main>
  )
}
