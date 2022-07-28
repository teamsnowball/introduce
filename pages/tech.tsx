import React, { useState, useEffect } from "react";
import type { NextPage } from 'next'
import styles from "/styles/Tech.module.css";
import GameList from './components/GameList'
import Controller from './components/controller'

const sections = [
    {
        icon: "/spidermanicon.png",
        name: "Spider Man - Miles Morales",
        bg: "/spidermanbg.png",
        game: true,
        gameText: "/spidermantextimg.png",
        id: 1,
    },
    {
        icon: "/demonsoulsicon.jpg",
        name: "Demon Souls",
        bg: "/demonsoulsbg.jpg",
        game: true,
        gameText: "/demonsoulstextimg.png",
        id: 2,
    },
    {
        icon: "/saicon.jpg",
        name: "GTA: San Andreas",
        game: true,
        gameText: "satextimg.png",
        bg: "/sabg.jpg",
        id: 3,
    },
];

const Tech: NextPage = () => {
    const [bg, setBg] = useState("/start-background.gif");
    let min = sections[0].id
    let max = sections[sections.length - 1].id

    const [curSec, setCurSec] = useState(sections[1])
    let [active, setActive] = useState(1)
    const [transform, setTransform] = useState(0)

    useEffect(() => {
    setBg(sections[1].bg)
    const listener = (e: KeyboardEvent) => {
        if (e.code === "KeyA" || e.code === "ArrowLeft") {
        if (active > min) {
            setActive(--active)
        }
        } else if (e.code === "KeyD" || e.code === "ArrowRight") {
        if (active < max) {
            setActive(++active)
        }
        } else if (e.code === "Enter") {
        }
    };
    document.addEventListener("keydown", listener);
    return () => {
        document.removeEventListener("keydown", listener);
    };
    }, []);

    useEffect(() => {
        let diff = active - 1;
        diff *= -1;
        let width = 80;
        let padding = 3;
        let margin = 3;
        let user_width = width + 2 * padding + 2 * margin;
        setTransform(diff * user_width);
        setBg(sections[active - 1].bg);
        setCurSec(sections[active - 1]);
    }, [active]);
    return (
        <div className={styles.mainContainerWrap} style={{ backgroundImage: `url(${bg})` }}>
            <Controller />
            <div className={styles.mainContainer}>
                <div className={styles.warningMessage}>
                <p>
                    You do know you have to play PlayStation 5 on a bigger screen right..
                    ?
                </p>
                <p>
                    For a proper experience please visit this website on a larger size
                    screen.
                </p>
                </div>
                <div className={styles.mainHeader}>
                <div className={styles.gamesMedia}>
                    <b>Games</b>
                    <p>Media</p>
                </div>
                <div className={styles.iconsContainer}>
                    <div className={styles.profileIcon}>
                    <img src={"/profile.jpg"} />
                    <div className={styles.onlineSymbol}></div>
                    </div>
                    <p>
                    {new Date().getHours()}:{new Date().getMinutes()}
                    </p>
                </div>
                </div>
                <div
                className={styles.sections}
                style={{ transform: `translateX(${transform}px)` }}
                >
                {sections.map((sec) => (
                    <div
                    className={`${styles.sect} ${
                        active === sec.id ? styles.activeSect : ""
                    }`}
                    >
                    <img src={sec.icon} />
                    {active === sec.id ? <p>{sec.name}</p> : ""}
                    </div>
                ))}
                </div>
                <GameList icon={curSec} />
            </div>
        </div>
    )
}

export default Tech;
