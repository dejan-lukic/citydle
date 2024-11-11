import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Typography,
  Divider,
  Stack
} from "@mui/material";
import Image from "next/image";
import { Guess } from "@/app/worldle/types/game-state";
import { Country } from "@/app/worldle/types/country";

interface WorldleGameOverModalProps {
  guesses: Guess[];
  correctCountry: Country;
  open: boolean;
  didWin: boolean;
  onRestart: () => void;
  onClose: () => void;
}

const WorldleGameOverModal: React.FC<WorldleGameOverModalProps> = (
  {open, guesses, correctCountry, didWin, onRestart, onClose}
) => {
  const emoji = didWin ? {
    src: '/images/emojis/woo.gif',
    alt: 'Woo!',
    width: 20,
    height: 20,
  } : {
    src: '/images/emojis/trollface.png',
    alt: 'Trollface',
    width: 24.2,
    height: 20,
  };

  return (
    <Dialog maxWidth="md" open={open} onClose={onClose}>
      <DialogTitle variant="h4" sx={{fontWeight: 'bold', textAlign: 'center'}}>
          {didWin ? 'Congratulations ' : 'Game Over '}

          <Image
            src={emoji.src}
            alt={emoji.alt}
            width={emoji.width}
            height={emoji.height}
          />
      </DialogTitle>

      <DialogContent sx={{padding: '0 20px'}}>
        <Typography variant="h6" sx={{textAlign: 'center'}}>
          The correct country was <Typography color="success" >{correctCountry.name.toUpperCase()}</Typography>
        </Typography>
      </DialogContent>

      <DialogContent>
        <Divider sx={{backgroundColor: '#444', my: 2}}/>

        <Stack spacing={1} divider={<Divider sx={{backgroundColor: '#444'}}/>}>
          {guesses.map((guess, index) => (
            <Stack direction="row" key={index} alignItems="center" spacing={2}>
              <Typography sx={{flex: 3}}>{guess.country.name.toUpperCase()}</Typography>
              <Typography sx={{flex: 2, whiteSpace: 'nowrap'}}>{Math.round(guess.distanceToCorrectCountry)} km</Typography>
              <Typography sx={{flex: 1}}>{guess.directionEmoji}</Typography>
              <Typography sx={{flex: 1}}>{guess.accuracy}%</Typography>
            </Stack>
          ))}
        </Stack>
      </DialogContent>

      <DialogActions>
        <Button onClick={onRestart} color="primary">
          Play Again
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default WorldleGameOverModal;
