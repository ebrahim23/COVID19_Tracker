// Import the axios library to fetch data
import axios from "axios";

// The API url
const url = "https://covid19.mathdro.id/api";

// Fetch api function
export const fetchData = async (country) => {
  let changeCountry = url;
  if (country) {
    changeCountry = `${url}/countries/${country}`;
  }

  try {
    const {
      data: { confirmed, deaths, recovered, lastUpdate },
    } = await axios.get(changeCountry);

    return { confirmed, deaths, recovered, lastUpdate };
  } catch (error) {
    console.log(error);
  }
};

// Fetch Daily Data
export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);

    const newData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));

    return newData;
  } catch (error) {
    console.log(error);
  }
};

// Fetch Countries Data
export const fetchContries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);
    return countries.map((country) => country.name);
  } catch (error) {
    console.log(error);
  }
};
