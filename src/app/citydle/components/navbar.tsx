"use client";

import React from 'react';
import styles from "@/app/citydle/components/navbar.module.css";
import { IconButton } from "@mui/material";
import { InfoOutlined, SettingsOutlined } from "@mui/icons-material";
import InfoDialog from "@/app/citydle/components/info-dialog";

const Navbar: React.FC = () => {
  const [infoDialogOpen, setInfoDialogOpen] = React.useState(false);

  return (
    <nav className={styles.navbar}>
      <InfoDialog
        open={infoDialogOpen}
        onClose={() => setInfoDialogOpen(false)}
      />

      <IconButton aria-label="game info">
        <InfoOutlined onClick={() => setInfoDialogOpen(true)} />
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
