import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./Picker.module.css";
import { fetchContries } from "../../api";

function CountryPicker({ handleCountries }) {
  const [theCountries, setTheCountries] = useState([]);

  useEffect(() => {
    const getContries = async () => {
      setTheCountries(await fetchContries());
    };

    return getContries();
  }, [setTheCountries]);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        defaultValue=""
        onChange={(e) => handleCountries(e.target.value)}
      >
        <option value="">Global</option>
        {theCountries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
}

export default CountryPicker;
