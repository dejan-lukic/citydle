"use client";

import Citydle from "./components/citydle";
import styles from "./page.module.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { GameProvider } from "@/app/context/game-context";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function Home() {
  return (
    <ThemeProvider theme={darkTheme}>
      <div className={styles.page}>
        <GameProvider>
          <Citydle />
        </GameProvider>
      </div>
    </ThemeProvider>
  );
}
