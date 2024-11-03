import { City } from "@/app/types/city";

export type Guess = {
  city: City;
  correctCountry: boolean;
  correctContinent: boolean;
  correctCity: boolean;
};

export interface GameState {
  guesses: Guess[];
  cityToGuess: City;
  currentGuess?: string;
}
