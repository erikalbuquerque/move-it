import { useContext } from "react";
import { CountdownContext } from "../contexts/CountdownContext";
import styles from "../styles/components/Countdown.module.css";

import { FaPlay, FaCheckCircle } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { ThemeContext } from "../contexts/ThemeContext";

export function Countdown() {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    progressBarWidth,
    resetCountdown,
    startCountdown,
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  const { darkTheme } = useContext(ThemeContext);

  return (
    <div>
      <div
        className={styles.countdownContainer}
        style={{ color: `${darkTheme ? "var(--white)" : "var(--text)"}` }}
      >
        <div
          style={{
            background: `${
              darkTheme ? "var(--background-container-dark)" : "var(--white)"
            }`,
          }}
        >
          <span
            style={{
              borderRight: `1px solid ${darkTheme ? "#333335" : "#f0f1f3"}`,
            }}
          >
            {minuteLeft}
          </span>
          <span
            style={{
              borderLeft: `1px solid ${darkTheme ? "#333335" : "#f0f1f3"}`,
            }}
          >
            {minuteRight}
          </span>
        </div>
        <span>:</span>
        <div
          style={{
            background: `${
              darkTheme ? "var(--background-container-dark)" : "var(--white)"
            }`,
          }}
        >
          <span
            style={{
              borderRight: `1px solid ${darkTheme ? "#333335" : "#f0f1f3"}`,
            }}
          >
            {secondLeft}
          </span>
          <span
            style={{
              borderLeft: `1px solid ${darkTheme ? "#333335" : "#f0f1f3"}`,
            }}
          >
            {secondRight}
          </span>
        </div>
      </div>

      {hasFinished ? (
        <button
          disabled
          className={styles.countdownButton}
          style={{
            background: `${
              darkTheme ? "var(--background-container-dark)" : "var(--white)"
            }`,
            color: `${darkTheme ? "var(--white)" : "var(--text)"}`,
          }}
        >
          Ciclo encerrado
          <FaCheckCircle />
        </button>
      ) : isActive ? (
        <div className={styles.countdownButtonContainer}>
          <button
            type="button"
            className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
            onClick={resetCountdown}
            style={{
              background: `${
                darkTheme ? "var(--background-container-dark)" : "var(--white)"
              }`,
              color: `${darkTheme ? "var(--white)" : "var(--text)"}`,
            }}
          >
            Abandonar ciclo
            <AiOutlineClose size={20} />
          </button>
          <div className={styles.progressBar}>
            <div
              className={styles.bar}
              style={{
                width: `${progressBarWidth}%`,
              }}
            />
          </div>
        </div>
      ) : (
        <button
          type="button"
          className={styles.countdownButton}
          onClick={startCountdown}
        >
          Iniciar um ciclo
          <FaPlay color="#fff" size={13} />
        </button>
      )}
    </div>
  );
}
