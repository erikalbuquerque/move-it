import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";

import styles from "../styles/components/ThumbTwitter.module.css";

export function ThumbTwitter() {
  const { level, challengesCompleted, currentExperience } = useContext(
    ChallengesContext
  );
  return (
    <div className={styles.container}>
      <div className={styles.sectionLeft}>
        <header>
          <span>{level}</span>
        </header>
        <strong>Avancei para o próximo level</strong>
      </div>
      <div className={styles.sectionRight}>
        <div className={styles.challenges}>
          <span>DESAFIOS</span>
          <strong>
            <span>{challengesCompleted}</span> Completados
          </strong>
        </div>
        <div className={styles.experience}>
          <span>EXPERIÊNCIA</span>
          <strong>
            <span>{currentExperience}</span> XP
          </strong>
        </div>
        <div>
          <img src="/logo-full.svg" alt="Logo" />
        </div>
      </div>
    </div>
  );
}
