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
          backgroundColor={
            guess?.correctCity ? 'rgb(34 197 94)' :
            guess?.correctCountry ? 'rgb(234 179 8)' :
            guess?.correctContinent ? 'rgb(249 115 22)' :
            ''
          }
        />;
      })}
    </div>
  );
}
