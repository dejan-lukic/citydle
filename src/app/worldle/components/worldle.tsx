"use client";

import { Button, Container } from "@mui/material";
import WorldleCountry from "./worldle-country";
import styles from "./worldle.module.css";
import WorldleGuessGrid from "@/app/worldle/components/worldle-guess-grid";
import { countries } from "@/app/worldle/countries";
import React, { useEffect, useState } from "react";
import { useGameContext } from "@/app/worldle/context/game-context";
import WorldleCountryAutocomplete from "@/app/worldle/components/worldle-country-autocomplete";
import { Country } from "@/app/worldle/types/country";
import { Guess } from "@/app/worldle/types/game-state";
import { haversineDistance } from "@/app/citydle/distance";
import { calculateDirection } from "@/app/citydle/direction";
import WorldleGameOverModal from "@/app/worldle/components/worldle-game-over-modal";

export default function Worldle() {
  const {gameState, setGameState, resetGame} = useGameContext();
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleCountryTyping = (country: string) => {
    setGameState({
      ...gameState,
      currentGuess: country,
    });
  };

  const handleCountrySelected = (country: Country) => {
    const distanceToCorrectCountry = haversineDistance(country.location, gameState.countryToGuess.location);

    const guess: Guess = {
      country,
      correctCountry: country.code === gameState.countryToGuess.code,
      distanceToCorrectCountry: distanceToCorrectCountry,
      directionEmoji: calculateDirection(country.location, gameState.countryToGuess.location, true),
      accuracy: Math.round(100 - (distanceToCorrectCountry / 20000) * 100),
    };

    setGameState({
      ...gameState,
      guesses: [...gameState.guesses, guess],
      currentGuess: '',
      didWin: guess.correctCountry,
      didLose: gameState.guesses.length >= 5 && !guess.correctCountry,
    });
  };

  const isGameOngoing = !gameState.didWin && !gameState.didLose;

  useEffect(() => {
    setDialogOpen(!isGameOngoing);
  }, [isGameOngoing]);

  return (
    <Container maxWidth="md" className={styles.worldleContainer}>
      <WorldleCountry countryCode={gameState.countryToGuess.code} />

      <WorldleGuessGrid
        className={styles.worldleGuessGrid}
        guesses={gameState.guesses}
      />

      <WorldleGameOverModal
        open={dialogOpen}
        guesses={gameState.guesses}
        correctCountry={gameState.countryToGuess}
        didWin={gameState.didWin ?? false}
        onRestart={resetGame}
        onClose={() => setDialogOpen(false)}
      />

      {isGameOngoing ?
        <WorldleCountryAutocomplete
          className={styles.worldleCountryAutocomplete}
          countries={countries}
          inputValue={gameState.currentGuess ?? ''}
          onCountryTyping={handleCountryTyping}
          onCountrySelected={handleCountrySelected}
          disabled={!isGameOngoing}
        />
        : <Button
          className={styles.worldlePlayAgainButton}
          variant="contained"
          fullWidth={true}
          color="success"
          onClick={resetGame}
        >
          Play again
        </Button>
      }
    </Container>
  );
}
