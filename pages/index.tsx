import React, { useState } from "react";
import { useEffect } from "react";
// import Home from "../components/Home";
import Home from "../components/Home";
import styled from "styled-components";

const key = "4d8fb5b93d4af21d66a2948710284366";

const StyledContainer = styled.div`
    width: 90%;
    max-width: 1080px;
    margin: 0 auto;
`;

const WeatherFunction = () => {
    const [weather, setWeather] = useState("");

    const getPosition = options => {
        return new Promise(function (resolve, reject) {
            navigator.geolocation.getCurrentPosition(resolve, reject, options);
        });
    };

    const getWeather = async (lat, lon) => {
        const api_call = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&APPID=${key}`
        );
        const data = await api_call.json();
        setWeather(data);
        console.log(data);
    };

    useEffect(() => {
        if (navigator.geolocation) {
            getPosition()
                //If user allow location service then will fetch data & send it to get-weather function.
                .then(position => {
                    getWeather(
                        position.coords.latitude,
                        position.coords.longitude
                    );
                })
                .catch(err => {
                    //If user denied location service then standard location weather will le shown on basis of latitude & latitude.
                    getWeather(48.85, 2.29);
                    alert(
                        "You have disabled location service. Allow 'This APP' to access your location. Your current location will be used for calculating Real time weather."
                    );
                });
        } else {
            alert("Geolocation not available");
        }
    }, []);

    if (weather) {
        return (
            <StyledContainer>
                <div>
                    <p>
                        <img
                            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                            alt="weather"
                        />
                    </p>
                    <p>
                        {weather.name}, {weather.sys.country}
                    </p>
                    <p>
                        Temperature: {Math.round(weather.main.temp)}°c (
                        {weather.weather[0].main}){" "}
                    </p>
                </div>
                <Home city={weather.name} />
            </StyledContainer>
        );
    }
};

export default WeatherFunction;
