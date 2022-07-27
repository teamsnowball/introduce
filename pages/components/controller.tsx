import type { NextPage } from 'next'
import styles from '/styles/Home.module.css'
import React, { useEffect , useState } from "react"
import EnterSvg from '/public/subdirectory_arrow_left_black_24dp.svg';
import BackSpaceSvg from '/public/arrow_right_alt_black_24dp.svg';

const Controller: NextPage = () => {
    const [activeW , setActiveW] = useState(false)
    const [activeA , setActiveA] = useState(false)
    const [activeS , setActiveS] = useState(false)
    const [activeD , setActiveD] = useState(false)
    const [activeEnter , setActiveEnter] = useState(false)
    const [activeBackSpace , setActiveBackSpace] = useState(false)
    const keyClassW = activeW ? `${styles["active"]}` : ``
    const keyClassA = activeA ? `${styles["active"]}` : ``
    const keyClassS = activeS ? `${styles["active"]}` : ``
    const keyClassD = activeD ? `${styles["active"]}` : ``
    const keyClassEnter = activeEnter ? `${styles["active"]}` : ``
    const keyClassBackSpace = activeBackSpace ? `${styles["active"]}` : ``
    useEffect(() => {
        const keyDownListener = (e: KeyboardEvent) => {
            if (e.code === "KeyW" || e.code === "ArrowUp") {
                setActiveW(!activeW)
            } else if (e.code === "KeyA" || e.code === "ArrowLeft") {
                setActiveA(!activeA)
            } else if (e.code === "KeyS" || e.code === "ArrowDown") {
                setActiveS(!activeS)
            } else if (e.code === "KeyD" || e.code === "ArrowRight") {
                setActiveD(!activeD)
            } else if (e.code === "Enter") {
                setActiveEnter(!activeEnter)
            } else if (e.code === "Backspace") {
                setActiveBackSpace(!activeBackSpace)
            }
        }
        const keyUpListener = (e: KeyboardEvent) => {
            if (e.code === "KeyW" || e.code === "ArrowUp") {
                setActiveW(activeW)
            } else if (e.code === "KeyA" || e.code === "ArrowLeft") {
                setActiveA(activeA)
            } else if (e.code === "KeyS" || e.code === "ArrowDown") {
                setActiveS(activeS)
            } else if (e.code === "KeyD" || e.code === "ArrowRight") {
                setActiveD(activeD)
            } else if (e.code === "Enter") {
                setActiveEnter(activeEnter)
            } else if (e.code === "Backspace") {
                setActiveBackSpace(activeBackSpace)
            }
        }
        document.addEventListener("keyup", keyUpListener)
        document.addEventListener("keydown", keyDownListener)
        return () => {
            document.removeEventListener("keyup", keyUpListener)
            document.removeEventListener("keydown", keyDownListener)
        }
    }, [])
    return (
        <div className={styles.container}>
            <div className={styles.keyBox}>
                <div className={styles.arrowBox}>
                    <div className={`${styles["key"]} ${styles["keyW"]} ${keyClassW}`}>W</div>
                    <br/>
                    <div className={`${styles["key"]} ${styles["keyA"]} ${keyClassA}`}>A</div>
                    <div className={`${styles["key"]} ${styles["keyS"]} ${keyClassS}`}>S</div>
                    <div className={`${styles["key"]} ${styles["keyD"]} ${keyClassD}`}>D</div>
                </div>
                <div className={`${styles["keyEnter"]} ${keyClassEnter}`}>
                    <div className={`${styles["keyEnterBox"]}`}></div>
                    <div className={`${styles["keyEnterBox"]} ${styles["real"]}`}></div>
                    <br/>
                    <div className={`${styles["keyEnterBox"]} ${styles["real"]}`}></div>
                    <div className={`${styles["keyEnterBox"]} ${styles["real"]}`}></div>
                    <EnterSvg className={styles.keyEnterIcon}/>
                </div>
                <div className={`${styles["keyBackSpace"]} ${keyClassBackSpace}`} >
                    <BackSpaceSvg className={styles.keyBackSpaceIcon}/>
                </div>
            </div>
        </div>
    )
}

export default Controller