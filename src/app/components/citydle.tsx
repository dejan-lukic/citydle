"use client";

import styles from "./citydle.module.css";
import CitiesAutocomplete from "@/app/components/cities-autocomplete";
import { getCities } from "@/app/cities";
import GuessRow from "@/app/components/guess-row";
import { useGameContext } from "@/app/context/game-context";
import { Guess } from "@/app/types/game-state";
import { City } from "@/app/types/city";

export default function Citydle() {
  const {gameState, setGameState} = useGameContext();

  const handleCitySelected = (city: City) => {
    const guess: Guess = {
      city: city,
      correctContinent: city.continent.toLowerCase() === gameState.cityToGuess.continent.toLowerCase(),
      correctCountry: city.country.toLowerCase() === gameState.cityToGuess.country.toLowerCase(),
      correctCity: city.name.toLowerCase() === gameState.cityToGuess.name.toLowerCase(),
    };

    console.log("Guess", guess);

    const newGuesses = [...gameState.guesses];
    newGuesses.push(guess);

    setGameState({
      ...gameState,
      guesses: newGuesses,
      currentGuess: '',
    });
  };

  const handleCityTyping = (city: string) => {
    setGameState({
      ...gameState,
      currentGuess: city,
    });
  };

  const maxGuesses = 6;

  return (
    <div>
      <h1 className={styles.title}>
        Citydle
      </h1>

      <CitiesAutocomplete
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

      {[...Array(maxGuesses - gameState.guesses.length)].map((_, index) => (
        <GuessRow
          key={index}
          partialGuess={index === 0 ? gameState.currentGuess : undefined}
        />
      ))}
    </div>
  );
}
