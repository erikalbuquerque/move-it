import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import { ThemeContext } from "../contexts/ThemeContext";
import styles from "../styles/components/ExperienceBar.module.css";

export function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(
    ChallengesContext
  );

  const { darkTheme, setTheme } = useContext(ThemeContext);

  const darkMode = darkTheme ? styles.dark : "";

  const percentToNextLevel =
    Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <div className={`${styles.container} ${darkMode}`}>
      <header className={styles.experienceBar}>
        <span>0 xp</span>
        <div>
          <div
            style={{
              width: `${percentToNextLevel}%`,
            }}
          />

          <span
            className={styles.currentExperience}
            style={{ left: `${percentToNextLevel}%` }}
          >
            {currentExperience} xp
          </span>
        </div>
        <span>{experienceToNextLevel} xp</span>
      </header>
      <div className={`${styles.switchButton} ${darkMode}`} onClick={setTheme}>
        <div
          style={{
            left: `${darkTheme ? "1rem" : "0rem"}`,
          }}
        ></div>
      </div>
    </div>
  );
}
