"use client";

import { Container } from "@mui/material";
import WorldleCountry from "./worldle-country";
import styles from "./worldle.module.css";
import WorldleGuessGrid from "@/app/worldle/components/worldle-guess-grid";
import { countries } from "@/app/worldle/countries";
import React from "react";
import { useGameContext } from "@/app/worldle/context/game-context";
import WorldleCountryAutocomplete from "@/app/worldle/components/worldle-country-autocomplete";
import { Country } from "@/app/worldle/types/country";
import { Guess } from "@/app/worldle/types/game-state";
import { haversineDistance } from "@/app/citydle/distance";
import { calculateDirection } from "@/app/citydle/direction";

export default function Worldle() {
  const {gameState, setGameState} = useGameContext();

  const handleCountryTyping = (country: string) => {
    setGameState({
      ...gameState,
      currentGuess: country,
    });
  };

  const handleCountrySelected = (country: Country) => {
    const guess: Guess = {
      country,
      correctCountry: country.code === gameState.countryToGuess.code,
      distanceToCorrectCountry: haversineDistance(country.location, gameState.countryToGuess.location),
      directionEmoji: calculateDirection(country.location, gameState.countryToGuess.location, true),
    };

    setGameState({
      ...gameState,
      guesses: [...gameState.guesses, guess],
      currentGuess: '',
      didWin: guess.correctCountry,
      didLose: gameState.guesses.length >= 6 && !guess.correctCountry,
    });
  };

  return (
    <Container maxWidth="md" className={styles.worldleContainer}>
      <WorldleCountry countryCode={gameState.countryToGuess.code} />

      <WorldleGuessGrid
        className={styles.worldleGuessGrid}
        guesses={gameState.guesses}
      />

      <WorldleCountryAutocomplete
        className={styles.worldleCountryAutocomplete}
        countries={countries}
        inputValue={gameState.currentGuess ?? ''}
        onCountryTyping={handleCountryTyping}
        onCountrySelected={handleCountrySelected}
        disabled={gameState.didWin || gameState.didLose}
      />
    </Container>
  );
}
