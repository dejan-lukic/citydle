import React from "react";
import WorldleGuessRow from "@/app/worldle/components/worldle-guess-row";
import { Stack } from "@mui/system";
import { Guess } from "@/app/worldle/types/game-state";

interface WorldleGuessGridProps {
  className?: string;
  guesses: Guess[];
}

const WorldleGuessGrid: React.FC<WorldleGuessGridProps> = (
  { className, guesses }
) => {
  return (
    <Stack spacing={".25rem"} className={className}>
      {guesses.map((guess, index) => (
        <WorldleGuessRow
          key={index}
          guess={guess}
        />
      ))}

      {Array.from({length: 6 - guesses.length}).map((_, index) => (
        <WorldleGuessRow key={index} />
      ))}
    </Stack>
  );
}

export default WorldleGuessGrid;
