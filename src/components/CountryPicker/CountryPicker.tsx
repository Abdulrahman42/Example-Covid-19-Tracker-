import React, { useEffect, useState } from 'react';
import NativeSelect from "@mui/material/NativeSelect";
import FormControl from "@mui/material/FormControl";
import styles from './CountryPicker.module.css';
import { fetchCountries } from '../../api';

interface contry {
  iso: string
  name: string
}

interface CountryPickerProps {
  handleChange: (event: React.FormEvent<HTMLSelectElement>) => void
}

const CountryPicker = ({ handleChange }: CountryPickerProps) => {
  const [fetchedCountriesState, setFetchCountriesState] = useState<contry[]>([]);
  const handleCountryChange = (event : React.FormEvent<HTMLSelectElement>) => {
    handleChange(event)
  }

  const fetchedCountries = async () => {
    const res = await fetchCountries()
    setFetchCountriesState(res)
  } 

  useEffect(() => {
    fetchedCountries()
  },[])

  return (
    <FormControl className={styles.container}>
      <NativeSelect defaultValue="" onChange={handleCountryChange}>
        <option value="s">Global</option>
        {fetchedCountriesState.map(({iso, name} : contry) => <option key={name} value={name}>{name}</option> )}
      </NativeSelect>
    </FormControl>
  )
}

export default CountryPicker;