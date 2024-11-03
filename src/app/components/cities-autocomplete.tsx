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
}

const CitiesAutocomplete: React.FC<CitiesAutocompleteProps> =
  ({cities, inputValue, onCitySelected, onCityTyping}) => {
    return (
      <Autocomplete
        sx={{width: '100%'}}
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
      />
    );
  };

export default CitiesAutocomplete;
