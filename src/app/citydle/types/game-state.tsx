import { City } from "@/app/citydle/types/city";

export type Guess = {
  city: City;
  correctCountry: boolean;
  correctContinent: boolean;
  correctCity: boolean;
  distanceToCorrectCity: number;
  directionEmoji: string;
};

export interface GameState {
  guesses: Guess[];
  cityToGuess: City;
  currentGuess?: string;
  didWin?: boolean;
  didLose?: boolean;
}
