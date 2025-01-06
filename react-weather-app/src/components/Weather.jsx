/* eslint-disable react/prop-types */
function Weather({ weather }) {

    return (
        <div>
            {weather && <>
                <h2>{weather.name}</h2>
                <p>{weather.weather[0].description}</p>
                <p>T: {weather.main.temp} ˚</p>
                <p>Feels like: {weather.main.feels_like} ˚</p>
                <p>H: {weather.main.temp_max} ˚</p>
                <p>L: {weather.main.temp_min} ˚</p>
                <p>Humidity: {weather.main.humidity}</p>
            </>}
        </div>

    );
}

export default Weather;