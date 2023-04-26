import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import React from 'react'
import { useState } from 'react'

import LandingPage from './landingPage'
import Dashboard from './Dashboard'


export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <>
      {loggedIn ? <Dashboard /> : <LandingPage />}
    </>
  )
}
