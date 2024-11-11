"use client";

import { Container } from "@mui/material";
import WorldleCountry from "./worldle-country";
import styles from "./worldle.module.css";
import WorldleGuessGrid from "@/app/worldle/components/worldle-guess-grid";
import { countries } from "@/app/worldle/countries";
import { Country } from "@/app/worldle/types/country";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import React from "react";

export default function Worldle() {
  return (
    <Container maxWidth="md" className={styles.worldleContainer}>
      <WorldleCountry countryCode="AU" />

      <WorldleGuessGrid />

      <Autocomplete
        className={styles.worldleGuessInput}
        options={countries}
        autoHighlight={true}
        getOptionLabel={(option: Country) => option.name}
        renderInput={(params) => <TextField
          {...params}
          label="Select a country"
          variant="outlined"/>
        }
      />
    </Container>
  );
}
