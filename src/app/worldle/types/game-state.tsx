import { Country } from "@/app/worldle/types/country";

export type Guess = {
  country: Country;
  correctCountry: boolean;
  distanceToCorrectCountry: number;
  directionEmoji: string;
};

export interface WorldleGameState {
  guesses: Guess[];
  countryToGuess: Country;
  currentGuess?: string;
  didWin?: boolean;
  didLose?: boolean;
}
