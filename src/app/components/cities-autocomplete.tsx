"use client";

import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import type { City } from "@/app/types/city";

interface CitiesAutocompleteProps {
  cities: City[];
  inputValue: string;
  onCitySelected: (city: City) => void;
  onCityTyping?: (city: string) => void;
  disabled?: boolean;
}

const CitiesAutocomplete: React.FC<CitiesAutocompleteProps> =
  ({cities, inputValue, onCitySelected, onCityTyping, disabled}) => {
    return (
      <Autocomplete
        sx={{width: '100%'}}
        disabled={disabled}
        options={cities}
        getOptionLabel={(option) => option.name}
        renderInput={(params) => <TextField
          {...params}
          label="Select a city"
          variant="outlined"/>
        }
        inputValue={inputValue}
        value={null}
        onChange={(_, value) => {
          if (value) {
            onCitySelected(value);
          }
        }}
        onInputChange={(_, value) => {
          onCityTyping?.(value);
        }}
        autoHighlight={true}
      />
    );
  };

export default CitiesAutocomplete;
