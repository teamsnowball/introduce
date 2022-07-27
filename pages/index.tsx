import type { NextPage } from 'next'
import { useState, useRef , useEffect } from "react"
import styles from '/styles/Home.module.css'
import Login from './components/Login'
import Controller from './components/controller'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Login />
      <Controller />
    </div>
  )
}

export default Home