import type { NextPage } from 'next'
import { useRef , useEffect } from "react"
import styles from '/styles/Home.module.css'
import Image from 'next/image'

const Login: NextPage = () => {
  return (
    <div className={styles.container}>
      <video autoPlay muted loop className={styles.video}>         
        <source src="/login/videoplayback.webm" type="video/mp4"/>       
      </video>
    </div>
  )
}

export default Login