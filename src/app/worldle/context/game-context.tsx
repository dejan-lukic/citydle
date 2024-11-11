"use client";

import React, { createContext, useState } from 'react';
import { WorldleGameState } from "@/app/worldle/types/game-state";
import { getRandomCountry } from "@/app/worldle/countries";

interface GameContextProps {
  gameState: WorldleGameState;
  setGameState: React.Dispatch<React.SetStateAction<WorldleGameState>>;
  resetGame: () => void;
}

export const GameContext = createContext<GameContextProps | undefined>(undefined);

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [gameState, setGameState] = useState<WorldleGameState>({
    guesses: [],
    countryToGuess: getRandomCountry(),
  });

  const resetGame = () => {
    setGameState({
      guesses: [],
      countryToGuess: getRandomCountry(),
    });
  };

  return (
    <GameContext.Provider value={{ gameState, setGameState, resetGame }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => {
  const context = React.useContext(GameContext);
  if (!context) {
    throw new Error('useGameContext must be used within a GameProvider');
  }

  return context;
}
