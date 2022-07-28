import React from "react";
import type { NextPage } from 'next'
import styles from "/styles/GameList.module.css";

type GameList = {
    icon: any;
}

const GameList: NextPage<GameList> = ({ icon }) => {
  return (
    <div className={styles.descriptContainer}>
      <img src={icon.gameText} />
      <p>{icon.name}</p>
      <div className={styles.buttonContainer}>
        <a className={styles.playButton}>Play</a>
        <a className={styles.ellipsesButton}>...</a>
      </div>
    </div>
  );
};

export default GameList;