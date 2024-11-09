"use client";

import React from 'react';
import styles from "@/app/components/navbar.module.css";
import { IconButton } from "@mui/material";
import { InfoOutlined, SettingsOutlined } from "@mui/icons-material";

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <IconButton aria-label="game info">
        <InfoOutlined />
      </IconButton>

      <h1 className={styles.title}>Citydle</h1>

      <div className={styles.right}>
        <IconButton aria-label="settings">
          <SettingsOutlined />
        </IconButton>
      </div>
    </nav>
  );
};

export default Navbar;
