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

  const darkMode = darkTheme ? styles.dark : "";

  return (
    <div>
      <div className={`${styles.countdownContainer} ${darkMode}`}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button disabled className={`${styles.countdownButton} ${darkMode}`}>
          Ciclo encerrado
          <FaCheckCircle />
        </button>
      ) : isActive ? (
        <div className={styles.countdownButtonContainer}>
          <button
            type="button"
            className={`${styles.countdownButton} ${styles.countdownButtonActive} ${darkMode}`}
            onClick={resetCountdown}
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
