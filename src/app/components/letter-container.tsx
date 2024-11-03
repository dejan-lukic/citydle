"use client";

import React from 'react';
import styles from "./letter-container.module.css";

export default function LetterContainer({letter, backgroundColor}: {
  letter?: string,
  backgroundColor?: string
}) {
  return (
    <div className={styles.letterContainerBox} style={{backgroundColor: backgroundColor}}>
      {letter?.toUpperCase()}
    </div>
  );
}
