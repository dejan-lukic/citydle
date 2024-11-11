import React from "react";
import WorldleGuessRow from "@/app/worldle/components/worldle-guess-row";
import { Stack } from "@mui/system";

interface WorldleGuessGridProps {
}

const WorldleGuessGrid: React.FC<WorldleGuessGridProps> = (
) => {
  const guesses = Array.from({length: 6});

  return (
    <Stack spacing={".25rem"}>
      {guesses.map((_, index) => (
        <WorldleGuessRow key={index} />
      ))}
    </Stack>
  );
}

export default WorldleGuessGrid;
