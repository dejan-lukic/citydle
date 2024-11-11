import React from "react";
import styles from "./worldle-guess-row.module.css";
import { Guess } from "@/app/worldle/types/game-state";
import { Stack } from "@mui/system";
import { Typography } from "@mui/material";

interface WorldleGuessRowProps {
  guess?: Guess;
}

const WorldleGuessRow: React.FC<WorldleGuessRowProps> = (
  { guess }
) => {
  if (!guess) {
    return (
      <div className={styles.worldleEmptyGuessRow}></div>
    );
  }

  return (
    <Stack
      direction="row"
      spacing={".25rem"}
      className={styles.worldleGuessRow}
    >
      <Typography sx={{flex: 3}}>
        {guess.country.name.toUpperCase()}
      </Typography>

      <Typography sx={{flex: 2}}>
        {Math.round(Math.floor(guess.distanceToCorrectCountry))} km
      </Typography>

      <Typography sx={{flex: 1}}>
        {guess.correctCountry ? '🎯' : guess.directionEmoji}
      </Typography>

      <Typography sx={{flex: 1}}>
        {Math.round(100 - (guess.distanceToCorrectCountry / 20000) * 100)}%
      </Typography>
    </Stack>
  );
}

export default WorldleGuessRow;
