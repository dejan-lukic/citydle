"use client";

import React, { useEffect, useState } from 'react';
import styles from "./letter-container.module.css";

export default function LetterContainer({letter, backgroundColor}: {
  letter?: string,
  backgroundColor?: string
}) {
  const [isAnimating, setIsAnimating] = useState(false);

  const triggerAnimation = () => {
    setIsAnimating(false);
    setTimeout(() => setIsAnimating(true), 10);
  };

  useEffect(() => {
    if (letter) {
      triggerAnimation();
    }
  }, [letter]);

  return (
    <div
      className={
        `${styles.letterContainerBox}
        ${isAnimating ? styles.cellFillAnimation : ''}`
      }
      style={{backgroundColor: backgroundColor}}
    >
      {letter?.toUpperCase()}
    </div>
  );
}
