import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import { CountdownContext } from "../contexts/CountdownContext";
import { ThemeContext } from "../contexts/ThemeContext";
import styles from "../styles/components/ChallengeBox.module.css";

export function ChallengeBox() {
  const { darkTheme } = useContext(ThemeContext);

  const { activeChallenge, resetChallenge, completeChallenge } = useContext(
    ChallengesContext
  );

  const { resetCountdown } = useContext(CountdownContext);

  function handleChallengeSucceeded() {
    completeChallenge();
    resetCountdown();
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountdown();
  }

  return (
    <div
      className={styles.challengeBoxContainer}
      style={{
        background: `${darkTheme ? "#282828" : "var(--white)"}`,
        color: `${darkTheme ? "var(--white)" : "var(--text)"}`,
      }}
    >
      {activeChallenge ? (
        <div className={styles.challengeActive}>
          <header
            style={{
              borderBottom: `1px solid ${
                darkTheme ? "var(--blue)" : "#d7d8da"
              }`,
            }}
          >
            Ganhe {activeChallenge.amount} xp
          </header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button
              type="button"
              className={styles.challengeFailedButton}
              onClick={handleChallengeFailed}
            >
              Falhei
            </button>
            <button
              type="button"
              className={styles.challengeSucceededButton}
              onClick={handleChallengeSucceeded}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div
          className={styles.challengeNotActive}
          style={{
            color: `${darkTheme ? "var(--white)" : "var(--text)"}`,
          }}
        >
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
            Avance de level completando desafios.
          </p>
        </div>
      )}
    </div>
  );
}
