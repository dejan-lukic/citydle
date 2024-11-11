"use client";

import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { Country } from "@/app/worldle/types/country";

interface WorldleCountryAutocompleteProps {
  countries: Country[];
  inputValue: string;
  onCountrySelected: (country: Country) => void;
  onCountryTyping?: (country: string) => void;
  disabled?: boolean;
  className?: string;
}

const WorldleCountryAutocomplete: React.FC<WorldleCountryAutocompleteProps> = (
  {countries, inputValue, onCountrySelected, onCountryTyping, disabled, className}
) => {
  return (
    <Autocomplete
      className={className}
      disabled={disabled}
      options={countries}
      getOptionLabel={(option) => option.name.toUpperCase()}
      renderInput={(params) => <TextField
        {...params}
        label="Select a country"
        variant="outlined"/>
      }
      inputValue={inputValue}
      value={null}
      onChange={(_, value) => {
        if (value) {
          onCountrySelected(value);
        }
      }}
      onInputChange={(_, value) => {
        onCountryTyping?.(value);
      }}
      autoHighlight={true}
      open={inputValue.length > 0}
    />
  );
};

export default WorldleCountryAutocomplete;
