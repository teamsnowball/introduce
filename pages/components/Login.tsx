import type { NextPage } from 'next'
import styles from '/styles/Home.module.css'

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