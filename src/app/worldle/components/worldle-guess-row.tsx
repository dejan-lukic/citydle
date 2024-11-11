import React, { useEffect } from "react";
import styles from "./worldle-guess-row.module.css";
import { Guess } from "@/app/worldle/types/game-state";
import { Stack } from "@mui/system";
import { Typography } from "@mui/material";

interface WorldleGuessRowProps {
  guess?: Guess;
}

function generateSquareCharacters(accuracy: number): string[] {
  const characters = new Array<string>(5);
  const greenSquareCount = Math.floor(accuracy / 20);
  const yellowSquareCount = accuracy - greenSquareCount * 20 >= 10 ? 1 : 0;
  characters.fill("🟩", 0, greenSquareCount);
  characters.fill("🟨", greenSquareCount, greenSquareCount + yellowSquareCount);
  characters.fill("⬜", greenSquareCount + yellowSquareCount);

  return characters;
}

const SQUARE_ANIMATION_LENGTH = 150;

const WorldleGuessRow: React.FC<WorldleGuessRowProps> = (
  { guess }
) => {
  const [animating, setAnimating] = React.useState(false);

  useEffect(() => {
    if (!guess) {
      return;
    }

    setAnimating(true);

    setTimeout(() => {
      setAnimating(false);
    }, SQUARE_ANIMATION_LENGTH * 6);
  }, [guess]);

  if (!guess) {
    return (
      <div className={styles.worldleEmptyGuessRow}></div>
    );
  }

  if (animating) {
    const squares = generateSquareCharacters(guess.accuracy);

    return (
      <div
        style={{display: "flex"}}
      >
        <div
          className={styles.worldleSquareRow}
        >
          {squares.map((square, index) => (
              <div
                key={index}
                className={styles.worldleAnimatedSquare}
                style={{animationDelay: `${SQUARE_ANIMATION_LENGTH * index}ms`}}
              >
                {square}
            </div>
          ))}
        </div>

        <Typography className={styles.worldleAnimatedAccuracy}>
          {guess.accuracy}%
        </Typography>
      </div>
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

      <Typography sx={{flex: 0.5}}>
        {guess.directionEmoji}
      </Typography>

      <Typography sx={{flex: 0.5}}>
        {guess.accuracy}%
      </Typography>
    </Stack>
  );
}

export default WorldleGuessRow;
