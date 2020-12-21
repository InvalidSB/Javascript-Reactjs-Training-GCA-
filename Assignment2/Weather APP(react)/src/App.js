import React, { useState } from 'react';
const api = {
  key: "040a79f08ee2480537dabb1b24196a6e",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  }

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  return (
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 22) ? 'app warm' :((weather.main.temp > 18) ? 'app mid' : 'app')) : 'app'}>
      <main className="major">
        <div className="search-box">
          <input 
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {(typeof weather.main != "undefined") ? (

        <div class="card  text-white">
          <div class="card-img-overlay">
            <h5 class="card-title">{weather.weather[0].main}</h5>
            <p class="card-text">The current temprature of {weather.name}, {weather.sys.country} is about :-</p>
            <h1 className="value"> {Math.round(weather.main.temp)}°c</h1>
            <p class="date">{dateBuilder(new Date())}</p>

          </div>
            
        </div>

        ) : ('')}
      </main>
    </div>
  );
}

export default App;






// Object {
//   "cod": "200",
//   "count": 1,
//   "list": Array [
//     Object {
//       "clouds": Object {
//         "all": 0,
//       },
//       "coord": Object {
//         "lat": 27.68,
//         "lon": 84.43,
//       },
//       "dt": 1604513105,
//       "id": 1283613,
//       "main": Object {
//         "feels_like": 290.27,
//         "grnd_level": 991,
//         "humidity": 70,
//         "pressure": 1016,
//         "sea_level": 1016,
//         "temp": 290.49,
//         "temp_max": 290.49,
//         "temp_min": 290.49,
//       },
//       "name": "Bharatpur",
//       "rain": null,
//       "snow": null,
//       "sys": Object {
//         "country": "NP",
//       },
//       "weather": Array [
//         Object {
//           "description": "clear sky",
//           "icon": "01n",
//           "id": 800,
//           "main": "Clear",
//         },
//       ],
//       "wind": Object {
//         "deg": 30,
//         "speed": 1.12,
//       },
//     },
//   ],
//   "message": "accurate",
// }







