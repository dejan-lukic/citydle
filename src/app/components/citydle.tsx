"use client";

import styles from "./citydle.module.css";
import CitiesAutocomplete from "@/app/components/cities-autocomplete";
import { getCities } from "@/app/cities";
import GuessRow from "@/app/components/guess-row";
import { useGameContext } from "@/app/context/game-context";
import { Guess } from "@/app/types/game-state";
import { City } from "@/app/types/city";
import { haversineDistance } from "@/app/distance";
import { calculateDirection } from "@/app/direction";
import BtnPlayAgain from "@/app/components/btn-play-again";

export default function Citydle() {
  const {gameState, setGameState} = useGameContext();
  const maxGuesses = 6;

  const handleCitySelected = (city: City) => {
    const correctCity = city.name.toLowerCase() === gameState.cityToGuess.name.toLowerCase();

    const guess: Guess = {
      city: city,
      correctContinent: city.continent.toLowerCase() === gameState.cityToGuess.continent.toLowerCase(),
      correctCountry: city.country.toLowerCase() === gameState.cityToGuess.country.toLowerCase(),
      correctCity,
      distanceToCorrectCity: haversineDistance(city.location, gameState.cityToGuess.location),
      directionEmoji: calculateDirection(city.location, gameState.cityToGuess.location, true),
    };

    const newGuesses = [...gameState.guesses];
    newGuesses.push(guess);

    setGameState({
      ...gameState,
      guesses: newGuesses,
      currentGuess: '',
      didWin: correctCity,
      didLose: newGuesses.length >= maxGuesses && !correctCity,
    });
  };

  const handleCityTyping = (city: string) => {
    setGameState({
      ...gameState,
      currentGuess: city,
    });
  };

  const gameOngoing = !gameState.didWin && !gameState.didLose;

  return (
    <div>
      <h1 className={styles.title}>
        Citydle
      </h1>

      <CitiesAutocomplete
        disabled={!gameOngoing}
        cities={getCities()}
        inputValue={gameState.currentGuess ?? ''}
        onCitySelected={handleCitySelected}
        onCityTyping={handleCityTyping}
      />

      {gameState.guesses.map((guess, index) => (
        <GuessRow
          key={index}
          guess={guess}
          maxLength={guess.city.name.length}
        />
      ))}

      {gameState.didWin && (
        <div className={styles.result}>
          You won!
          <BtnPlayAgain />
        </div>
      )}

      {gameState.didLose && (
        <div className={styles.result}>
          You lost! The city was {gameState.cityToGuess.name}.
          <BtnPlayAgain />
        </div>
      )}

      {gameOngoing && (
        <div className={styles.emptyGuesses}>
          {[...Array(maxGuesses - gameState.guesses.length)].map((_, index) => (
            <GuessRow
              key={index}
              partialGuess={index === 0 ? gameState.currentGuess : undefined}
            />
          ))}
        </div>
      )}
    </div>
  );
}
