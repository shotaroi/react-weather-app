import { useState } from 'react'
import '../index.css'

function App() {
  const [ city, setCity ] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(city);
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
      </div>
    </>
  )
}

export default App
