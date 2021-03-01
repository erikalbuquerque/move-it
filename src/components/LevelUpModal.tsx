import { useRouter } from "next/router";
import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/LevelUpModal.module.css";

import { FaTwitter } from "react-icons/fa";
import { ThemeContext } from "../contexts/ThemeContext";

export function LevelUpModal() {
  const { level, closeLevelUpModal } = useContext(ChallengesContext);

  const { darkTheme } = useContext(ThemeContext);

  const darkMode = darkTheme ? styles.dark : "";

  const router = useRouter();

  return (
    <div className={`${styles.overlay} ${darkMode}`}>
      <div className={`${styles.container} ${darkMode}`}>
        <header>
          <span>{level}</span>
        </header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>

        <button
          type="button"
          className={styles.closeLevelUpModal}
          onClick={closeLevelUpModal}
        >
          <img src="/icons/close.svg" alt="Fechar modal" />
        </button>

        <button
          type="button"
          className={styles.shareOnTwitter}
          onClick={() => router.push("/share/level")}
        >
          Compartilhar no Twitter <FaTwitter size={24} />
        </button>
      </div>
    </div>
  );
}
