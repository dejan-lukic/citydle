import React, { createContext, useState } from 'react';
import { GameState } from "@/app/types/game-state";

interface GameContextProps {
  gameState: GameState;
  setGameState: React.Dispatch<React.SetStateAction<GameState>>;
}

export const GameContext = createContext<GameContextProps | undefined>(undefined);

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [gameState, setGameState] = useState<GameState>({
    guesses: [],
    cityToGuess: {
      name: 'Berlin',
      country: 'Germany',
      continent: 'Europe',
      location: {
        lat: 52.520008,
        lng: 13.404954,
      },
      population: 3769495,
      fact: 'Berlin is 9 times bigger than Paris and has more bridges than Venice.',
    },
  });

  return (
    <GameContext.Provider value={{ gameState, setGameState }}>
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
