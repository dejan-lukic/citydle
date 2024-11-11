import { Metadata } from "next";
import Citydle from "./components/citydle";
import styles from "@/app/styles/game.module.css";
import { GameProvider } from "@/app/citydle/context/game-context";

export const metadata: Metadata = {
  title: "Citydle",
  description: "Guess the City!",
};

export default function Home() {
  return (
    <div className={styles.gamePage}>
      <GameProvider>
        <Citydle />
      </GameProvider>
    </div>
  );
}
