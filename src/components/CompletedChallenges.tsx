import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import { ThemeContext } from "../contexts/ThemeContext";
import styles from "../styles/components/CompletedChallenges.module.css";

export function CompletedChallenges() {
  const { challengesCompleted } = useContext(ChallengesContext);
  const { darkTheme } = useContext(ThemeContext);

  return (
    <div
      className={styles.completedChallengesContainer}
      style={{
        color: `${darkTheme ? "var(--white)" : "var(--text)"}`,
        borderBottom: `1px solid ${darkTheme ? "var(--blue)" : "#d7d8da"}`,
      }}
    >
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </div>
  );
}
