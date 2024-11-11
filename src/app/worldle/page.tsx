import { Metadata } from "next";
import Worldle from "@/app/worldle/components/worldle";
import { GameProvider } from "@/app/worldle/context/game-context";
import styles from "@/app/styles/game.module.css";

export const metadata: Metadata = {
  title: "Worldle",
  description: "Guess the country based on its shape",
};

export default function WorldleHomePage() {
  return (
    <div className={styles.gamePage}>
      <GameProvider>
        <Worldle/>
      </GameProvider>
    </div>
  );
}
