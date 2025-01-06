import { useState } from 'react'
import '../index.css'
import Weather from './Weather';
import axios from 'axios';

function App() {
  const [ city, setCity ] = useState("");
  const [ weather, setWeather ] = useState(null);

  const fetchWeather = async () => {
    const apiKey = "";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    
    axios.get(url)
      .then(response => {
        setWeather(response.data);
      })
      .catch(error => {
        console.log('Error fetching data', error);
        alert("Error fetching weather data. Please retry.");
      });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather();
  }

  return (
    <>
      <div>
        <h1>React Weather App</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" 
            placeholder='Enter city name'
            value={city} 
            onChange={(e) => {setCity(e.target.value)}}/>
          <button type='submit'>Get Weather</button>
        </form>
        <Weather />
      </div>
    </>
  )
}

export default App
