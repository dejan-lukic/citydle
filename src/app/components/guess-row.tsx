"use client";

import React from 'react';
import styles from "./letter-row.module.css";
import LetterContainer from './letter-container';
import { Guess } from "@/app/types/game-state";

export default function GuessRow(
  {guess = undefined, partialGuess = undefined, maxLength = 16}: {
    guess?: Guess;
    partialGuess?: string;
    maxLength?: number;
  }) {
  return (
    <div className={styles.letterRow}>
      {[...Array(maxLength)].map((_, index) => {
        const letter = guess?.city.name[index]
          ?? partialGuess?.[index]
          ?? "";

        return <LetterContainer
          key={index}
          letter={letter}
          guess={guess}
        />;
      })}

      {guess && (
        <div className={styles.distance}>
          {Math.round(Math.floor(guess.distanceToCorrectCity))} km
          <span role="img" aria-label="direction">
            {guess.correctCity ? '🎯' : guess.directionEmoji}
          </span>
        </div>
      )}
    </div>
  );
}
