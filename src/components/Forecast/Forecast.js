import React, { useState } from 'react'
import Conditions from '../Conditions/Conditions'
import classes from './Forecast.module.css'

function Forecast() {
  const [responseObj, setResponseObj] = useState({})
  let [city, setCity] = useState('')
  let [unit, setUnit] = useState('metric')
  let [error, setError] = useState(false)
  let [loading, setLoading] = useState(false)

  function getForecast(e) {
    e.preventDefault()

    if (city.length === 0) {
      return setError(true)
    }

    setResponseObj({})
    setError(false)
    setLoading(true)

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?units=${unit}&q=${city}&appid=${process.env.REACT_APP_API_KEY}`
    )
      .then((response) => response.json())
      .then((response) => {
        if (response.cod !== 200) {
          throw new Error()
        }
        setLoading(false)
        setResponseObj(response)
      })
      .catch((error) => {
        setLoading(false)
        setError(true)
        console.error(error.message)
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
      <Conditions responseObj={responseObj} error={error} loading={loading} />
    </div>
  )
}

export default Forecast
