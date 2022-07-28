import { NextPage } from "next";
import React, { useState, useEffect, SetStateAction } from "react";
import styles from "/styles/Profile.module.css";
import Follow from '/public/favorite_border_black_24dp.svg';
import { useRouter } from 'next/router'


type Users = {
    add_user: Boolean;
    name: String;
    imgUrl: any;
    id: number;
}

type ProfileProps = {
    setUser: any;
};

const users: Users[] = [
  {
    add_user: false,
    name: "Github",
    imgUrl: "/github.jpg",
    id: 1,
  },
  {
    add_user: false,
    name: "Tech",
    imgUrl: "/profile.jpg",
    id: 2,
  },
  {
    add_user: false,
    name: "Notion",
    imgUrl: "/notion.png",
    id: 3,
  },
];

const Profile: NextPage<ProfileProps> = ({setUser}) => {
  const router = useRouter()
  const min = users[0].id;
  const max = users[users.length - 1].id;
  let [active, setActive] = useState(2);
  const [transform, setTransform] = useState(0);
  const [controllerOptions, setControllerOptions] = useState({
    animationDelay: "2s",
  });

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.code === "KeyA" || e.code === "ArrowLeft") {
        if (active > min) {
          setControllerOptions({ animationDelay: "0.25s" });
          setActive(--active);
        }
      } else if (e.code === "KeyD" || e.code === "ArrowRight") {
        if (active < max) {
          setControllerOptions({ animationDelay: "0.25s" });
          setActive(++active);
        }
      } else if (e.code === "Enter") {
        console.log(active)
        switch(active) {
          case 1 : {
            window.open(
              'https://github.com/PobyCoder',
              '_blank'
            )
          }
          break
          case 2 : {
            router.push("/tech")
          }
          break
          case 3 : {
            window.open(
              'https://solid-alto-1b6.notion.site/Full-Stack-Developer-b8de066d2e0944c58c7ba8d4e6d6378d',
              '_blank'
            )
          }
          break
        }
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, []);

  useEffect(() => {
    let diff :number = active - 2;
    diff *= -1;
    let width = 125;
    let padding = 3;
    let margin = 40;
    let user_width :number = width + 2 * padding + 2 * margin;
    setTransform(diff * user_width);
    setUser(users[active - 1]);
  }, [active]);

  return (
    <div className={styles.loginContainer}>
      <h1>Welcome Back to PobyCoder</h1>
      <p>What are your interests? Pick it!</p>
      <div
        className={styles.users}
        style={{ transform: `translateX(${transform}px)` }}
      >
        {users.map((u) => (
          <div
            key={`profile_`+u.id}
            className={`${styles.user} ${
              active === u.id ? styles.activeUser : ""
            }`}
          >
            {u.add_user ? (
              <>
                <h1>+</h1>
                <h2>Add user</h2>
              </>
            ) : (
              <>
                {active === u.id ? (
                  <Follow className={styles.profileFollow} />
                ) : (
                  ""
                )}
                <img src={u.imgUrl} />
                <h2 className={styles.profileName}>{u.name}</h2>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;