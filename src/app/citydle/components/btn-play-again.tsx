import styles from "@/app/citydle/components/citydle.module.css";
import { getRandomCity } from "@/app/citydle/cities";
import { useGameContext } from "@/app/citydle/context/game-context";

export default function BtnPlayAgain() {
  const {setGameState} = useGameContext();

  return (
    <button
      className={styles.playAgainButton}
      onClick={() => setGameState({
        guesses: [],
        cityToGuess: getRandomCity(),
      })}
    >
      Play again
    </button>
  );
}
