import { useRouter } from "next/router";
import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/LevelUpModal.module.css";

import { FaTwitter } from "react-icons/fa";
import { ThemeContext } from "../contexts/ThemeContext";

export function LevelUpModal() {
  const { level, closeLevelUpModal } = useContext(ChallengesContext);

  const { darkTheme } = useContext(ThemeContext);

  const router = useRouter();

  return (
    <div
      className={styles.overlay}
      style={{
        background: `${
          darkTheme ? "rgba(0, 0, 0, 0.8" : "rgba(242, 243, 245, 0.8"
        }`,
      }}
    >
      <div
        className={styles.container}
        style={{
          background: `${
            darkTheme ? "var(--background-container-dark)" : "var(--white)"
          }`,
          color: `${darkTheme ? "var(--white)" : "var(--text)"}`,
        }}
      >
        <header>
          <span>{level}</span>
        </header>

        <strong
          style={{
            color: `${darkTheme ? "var(--white)" : "var(--text)"}`,
          }}
        >
          Parabéns
        </strong>
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
          style={{
            background: `${
              darkTheme ? "var(--background-container-dark)" : "##f5fcff"
            }`,
            borderTop: `1px solid ${darkTheme ? "#333335" : "#dcdde0"}`,
          }}
          onClick={() => router.push("/share/level")}
        >
          Compartilhar no Twitter <FaTwitter size={24} />
        </button>
      </div>
    </div>
  );
}
