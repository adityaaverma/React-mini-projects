import React from "react";
import { useState } from "react";
const apiKey = "a0eed24a24740ae6823572257fa66240";
const baseUrl = "https://api.openweathermap.org/data/2.5/weather";

const Container = () => {
  const [input, setInput] = useState(
    "Click the button to check today's weather"
  );
  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    getWeather(latitude, longitude);
  }
  function error() {
    alert("Unable to retrieve your location.");
  }

  function getWeather(latitude, longitude) {
    const url = `${baseUrl}?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        displayWeather(data);
      })
      .catch((error) => {
        console.error("Error fetching the weather data:", error);
      });
  }
  function displayWeather(data) {
    const temperature = data.main.temp;
    const { main } = data;
    const description = data.weather[0].description;
    const city = data.name;

    setInput(`The temperate in ${city} is ${temperature} with ${description}`);
  }
  const handleClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };
  return (
    <div className="bg-blue-500  flex flex-col ">
      <h1 className="text-center">Welcome to Weather App</h1>
      <h2 className="text-center">{input}</h2>
      <button className="bg-white" onClick={handleClick}>
        Check Weather
      </button>
    </div>
  );
};

export default Container;
