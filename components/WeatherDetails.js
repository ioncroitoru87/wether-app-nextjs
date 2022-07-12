import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const key = "4d8fb5b93d4af21d66a2948710284366";

const StyledContainer = styled.div`
  width: 90%;
  max-width: 1080px;
  margin: 0 auto;
`;

const WeatherDetails = () => {
  const { cityId } = useParams();
  const [city, setCity] = useState("");

  useEffect(() => {
    const fetchCity = async () => {
      const data = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityId}&units=metric&appid=${key}`
      );
      const result = await data.data;
      setCity(result);
      console.log(result);
    };
    fetchCity();
  }, [cityId]);
  const { main, weather, sys } = city;
  console.log(main);
  if (city.length === 0) {
    return null;
  }
  return (
    <>
      <StyledContainer>
        <h2>
          {cityId}, {sys.country}
        </h2>
        <p>
          <img
            src={`https://openweathermap.org/img/wn/${weather[0].icon}.png`}
            alt="weather"
          />
        </p>

        <p>
          Temperature: {Math.round(main.temp)}°c ( {weather[0].main}){" "}
        </p>
        <Link to="/">Back to main page</Link>
      </StyledContainer>
    </>
  );
};
export default WeatherDetails;
