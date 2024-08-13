
import { useState } from 'react';
import CityInput from './components/CityInput.jsx';
import WeatherDisplay from './components/WeatherDisplay.jsx';
import Header from './components/Header.jsx';
import styled from 'styled-components';

  const AppWrapper = styled.div`
    font-family: Arial, Helvetica, sans-serif;
  `;


function App() {
  const [weather, setWeather] = useState(null);

  const fetchWeather = async (city) => {
    const apiKey = '6e8c44766d686cdf27f4c08d3b19941c';
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    const data = await response.json();
    setWeather({
      temp: data.main.temp,
      description: data.weather[0].description,
    });
  };

  return (
    <AppWrapper>
      <Header />
      <CityInput onSearch={fetchWeather}/>
      <WeatherDisplay weather={weather}/>
    </AppWrapper>
  )
}

export default App
