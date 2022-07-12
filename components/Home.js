import React, { useState } from "react";
import SearchForm from "../components/Form";
import WeatherContainer from "../components/WeatherContainer";

import useDataApi from "../reducers/useDataApi";
const key = "4d8fb5b93d4af21d66a2948710284366";

const initialState = "Bucharest";

function Home({ city }) {
  const [query, setQuery] = useState(initialState);
  const [{ data, isLoading, isError }, doFetch] = useDataApi(
    `https://api.openweathermap.org/data/2.5/weather?q=${initialState}&units=metric&appid=${key}`,
    []
  );
  const handleSearchInput = (e) => {
    setQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    doFetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${key}`
    );
    setQuery("");
  };

  return (
    <>
      <SearchForm
        searchTerm={query}
        onSearchInput={handleSearchInput}
        onSearchSubmit={handleSearchSubmit}
      />

      {isError && <div>Something went wrong ...</div>}
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <WeatherContainer city={city} data={data} />
      )}
    </>
  );
}

export default Home;
