import React from "react";
import styles from "./worldle-guess-row.module.css";

interface WorldleGuessRowProps {
}

const WorldleGuessRow: React.FC<WorldleGuessRowProps> = (
) => {
  return (
    <div className={styles.worldleGuessRow}></div>
  );
}

export default WorldleGuessRow;
