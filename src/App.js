import React, { Component } from "react";
import { Cards, Chart, CountryPicker } from "./components";

import styles from "./App.module.css";
import { fetchData } from "./api";
import logo from "./image.png";

export default class App extends Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountries = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img src={logo} alt="COVID-19" className={styles.logo} />
        <Cards data={data} />
        <CountryPicker handleCountries={this.handleCountries} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}
