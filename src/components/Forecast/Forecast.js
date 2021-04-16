import React, { useState } from 'react'
import Conditions from '../Conditions/Conditions'
import classes from './Forecast.module.css'

function Forecast() {
  const [responseObj, setResponseObj] = useState({})
  let [city, setCity] = useState('')
  let [unit, setUnit] = useState('metric')

  function getForecast(e) {
    e.preventDefault()

    fetch(
      `api.openweathermap.org/data/2.5/weather?units=${unit}&q=${city}&appid=e27a751a6ee7a8994bf39a684cebc190`
    )
      .then((response) => response.json())
      .then((response) => {
        setResponseObj(response)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <div>
      <h2>Find Current Weather Conditions</h2>
      <form onSubmit={getForecast}>
        <input
          className={classes.TextInput}
          type="text"
          placeholder="Enter City"
          maxLength="50"
          value={city}
          onChange={(event) => setCity(event.target.value)}
        />

        <label className={classes.Radio}>
          <input
            type="radio"
            name="units"
            checked={unit === 'metric'}
            value="metric"
            onChange={(event) => setUnit(event.target.value)}
          />
          Celcius
        </label>

        <label className={classes.Radio}>
          <input
            type="radio"
            name="units"
            checked={unit === 'imperial'}
            value="imperial"
            onChange={(event) => setUnit(event.target.value)}
          />
          Fahrenheit
        </label>

        <button className={classes.Button} type="submit">
          Get Forecast
        </button>
      </form>
      <hr />
      <Conditions responseObj={responseObj} />
    </div>
  )
}

export default Forecast
