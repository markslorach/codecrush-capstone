import React from 'react'
import Link from 'next/link'

export const NavBar = () => {
  return (
    <nav className='p-2 bg-red-600'>
          <h2>NavBar</h2>
          <Link href="/">Logo Page</Link>
          <Link href="/login">Login Page</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/profile">Profile</Link>
          <Link href="/beginner">Beginner</Link>
          <Link href="/intermediate">Intermediate</Link>
          <Link href="/advanced">Advanced</Link>
          <Link href="/leaderboard">Leaderboard</Link>
        </nav>
  )
}
