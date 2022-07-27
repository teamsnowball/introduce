import type { NextPage } from 'next'
import styles from '/styles/Home.module.css'
import React, { useEffect } from "react";

const Controller: NextPage = () => {
    useEffect(() => {
        const keyDownListener = (e: any) => {
            if (e.code === "KeyW" || e.code === "ArrowUp") {
                console.log("Up")
                document.querySelector("."+styles.keyW)?.classList.add("active")
            } else if (e.code === "KeyA" || e.code === "ArrowLeft") {
                console.log("Left")
            } else if (e.code === "KeyS" || e.code === "ArrowDown") {
                console.log("Down")
            } else if (e.code === "KeyD" || e.code === "ArrowRight") {
                console.log("Right")
            } else if (e.code === "Enter") {
                console.log("Enter")
            } else if (e.code === "BackSpace") {
                console.log("Back")
            }
        };
        const keyUpListener = (e: any) => {
            if (e.code === "KeyW" || e.code === "ArrowUp") {
                document.querySelector("."+styles.keyW)?.classList.remove(styles.active)
            } else if (e.code === "KeyA" || e.code === "ArrowLeft") {
                console.log("Left")
            } else if (e.code === "KeyS" || e.code === "ArrowDown") {
                console.log("Down")
            } else if (e.code === "KeyD" || e.code === "ArrowRight") {
                console.log("Right")
            } else if (e.code === "Enter") {
                console.log("Enter")
            } else if (e.code === "BackSpace") {
                console.log("Back")
            }
        };
        document.addEventListener("keydown", keyDownListener);
        return () => {
            document.removeEventListener("keydown", keyDownListener);
        };
        document.addEventListener("keyup", keyUpListener);
        return () => {
            document.removeEventListener("keyup", keyUpListener);
        };
    }, []);
    return (
    <div className={styles.container}>
        <div className={styles.arrowBox}>
        <div className={`${styles["key"]} ${styles["keyW"]}`}>W</div>
        <br/>
        <div className={`${styles["key"]} ${styles["keyA"]}`}>A</div>
        <div className={`${styles["key"]} ${styles["keyS"]}`}>S</div>
        <div className={`${styles["key"]} ${styles["keyD"]}`}>D</div>
        </div>
    </div>
    )
}

export default Controller