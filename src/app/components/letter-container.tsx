"use client";

import React, { useEffect, useState } from 'react';
import styles from "./letter-container.module.css";
import { Guess } from "@/app/types/game-state";

const ANIMATION_DURATION = 350;

interface LetterContainerProps {
  letter?: string;
  guess?: Guess;
}

export default function LetterContainer({letter, guess}: LetterContainerProps) {
  const [isAnimatingTyping, setIsAnimatingTypingTyping] = useState(false);
  const [showFinalColor, setShowFinalColor] = useState(false);

  const triggerTypingAnimation = () => {
    setIsAnimatingTypingTyping(false);
    setTimeout(() => setIsAnimatingTypingTyping(true), 10);
  };

  useEffect(() => {
    if (letter) {
      triggerTypingAnimation();
    }
  }, [letter]);

  const targetColor =
    guess?.correctCity ? 'rgb(34 197 94)' :
    guess?.correctCountry ? 'rgb(234 179 8)' :
    guess?.correctContinent ? 'rgb(249 115 22)' :
    '';

  useEffect(() => {
    if (guess) {
      const timeout = setTimeout(() => setShowFinalColor(true), ANIMATION_DURATION);
      return () => clearTimeout(timeout);
    }
  }, [guess]);

  const shouldAnimateCellReveal = !!guess;

  return (
    <div
      className={`
        ${styles.letterContainerBox}
        ${isAnimatingTyping ? styles.cellFillAnimation : ''}
        ${shouldAnimateCellReveal ? styles.cellRevealAnimation : ''}
        ${showFinalColor ? styles.revealed : ''}
      `}
      style={{
        animationDuration: `${ANIMATION_DURATION}ms`,
        ["--target-color" as string]: targetColor,
      }}
    >
      {letter?.toUpperCase()}
    </div>
  );
}
