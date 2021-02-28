import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import { ThemeContext } from "../contexts/ThemeContext";
import styles from "../styles/components/Profile.module.css";

export function Profile() {
  const { level } = useContext(ChallengesContext);
  const { darkTheme } = useContext(ThemeContext);
  return (
    <div className={styles.profileContainer}>
      <img
        src="https://github.com/erikalbuquerque.png"
        alt="Érik Albuquerque"
      />
      <div>
        <strong
          style={{ color: `${darkTheme ? "var(--white)" : "var(--title)"}` }}
        >
          Érik Albuquerque
        </strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
