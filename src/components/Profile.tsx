import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import { ThemeContext } from "../contexts/ThemeContext";
import styles from "../styles/components/Profile.module.css";

export function Profile() {
  const { level } = useContext(ChallengesContext);
  const { darkTheme } = useContext(ThemeContext);

  const darkMode = darkTheme ? styles.dark : "";

  return (
    <div className={`${styles.profileContainer} ${darkMode}`}>
      <img
        src="https://github.com/erikalbuquerque.png"
        alt="Érik Albuquerque"
      />
      <div>
        <strong>Érik Albuquerque</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
