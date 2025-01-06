import { useState } from 'react'
import '../index.css'
import Weather from './Weather';

function App() {
  const [ city, setCity ] = useState("");

  const fetchWeather = async () => {

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
