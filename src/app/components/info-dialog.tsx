"use client";

import React from 'react';
import { CloseOutlined } from '@mui/icons-material';
import styles from './info-dialog.module.css';
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton
} from "@mui/material";
import GuessRow from "@/app/components/guess-row";
import { City } from "@/app/types/city";

interface InfoDialogProps {
  open: boolean;
  onClose: () => void;
}

const InfoDialog: React.FC<InfoDialogProps> = ({open, onClose}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
    >
      <DialogTitle className={styles.dialogTitle}>How to play</DialogTitle>

      <IconButton
        aria-label="close"
        onClick={onClose}
        className={styles.closeButton}
      >
        <CloseOutlined />
      </IconButton>

      <DialogContentText className={styles.dialogSubtitle}>
        Guess the city!
      </DialogContentText>

      <DialogContent className={styles.dialogContent}>
        <GuessRow
          guess={{
            city: getExampleCity('Sydney'),
            correctContinent: false,
            correctCountry: false,
            correctCity: false,
            distanceToCorrectCity: 16093,
            directionEmoji: '⬅️',
          }}
          maxLength={6}
        />

        <DialogContentText className={styles.exampleText}>
          In this example, Sydney is not on the same continent as the city to guess.
        </DialogContentText>

        <GuessRow
          guess={{
            city: getExampleCity('Belgrade'),
            correctContinent: true,
            correctCountry: false,
            correctCity: false,
            distanceToCorrectCity: 1001,
            directionEmoji: '↖️',
          }}
          maxLength={8}
        />

        <DialogContentText className={styles.exampleText}>
          Now the continent is correct, but the country is not, so the guess is orange.
          So the correct city is in Europe, but not in Serbia.
        </DialogContentText>

        <GuessRow
          guess={{
            city: getExampleCity('Munich'),
            correctContinent: true,
            correctCountry: true,
            correctCity: false,
            distanceToCorrectCity: 504,
            directionEmoji: '⬆️',
          }}
          maxLength={6}
        />

        <DialogContentText className={styles.exampleText}>
          Now the country is correct, but the city is not, so the guess is yellow.
          The correct city is in Germany, but it&#39;s not Munich.
        </DialogContentText>

        <GuessRow
          guess={{
            city: getExampleCity('Berlin'),
            correctContinent: true,
            correctCountry: true,
            correctCity: true,
            distanceToCorrectCity: 0,
            directionEmoji: '🎯',
          }}
          maxLength={6}
        />

        <DialogContentText className={styles.exampleText}>
          Now the guess is green, because the city is correct!
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
}

function getExampleCity(name: string): City {
  return {
    name,
    country: 'whatever',
    continent: 'whatever',
    location: {
      lat: 0,
      lng: 0,
    },
    population: 0,
    fact: 'whatever',
  };
}

export default InfoDialog;
