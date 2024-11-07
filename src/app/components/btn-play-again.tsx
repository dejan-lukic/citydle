import styles from "@/app/components/citydle.module.css";
import { getCities } from "@/app/cities";
import { useGameContext } from "@/app/context/game-context";

export default function BtnPlayAgain() {
  const {setGameState} = useGameContext();

  return (
    <button
      className={styles.playAgainButton}
      onClick={() => setGameState({
        guesses: [],
        cityToGuess: getCities()[Math.floor(Math.random() * getCities().length)]
      })}
    >
      Play again
    </button>
  );
}
