import React from 'react'
import classes from './Conditions.module.css'

function Conditions(props) {
  return (
    <div className={classes.Wrapper}>
      {props.error && (
        <small className={classes.Small}>Please enter a valid city.</small>
      )}
      {props.loading && <div className={classes.Loader}>Loading...</div>}
      {props.responseObj.cod === 200 ? (
        <div>
          <p>
            <strong>{props.responseObj.name}</strong>
          </p>
          <p>
            <strong>Temperature:</strong>{' '}
            {Math.round(props.responseObj.main.temp)}.<br />
            <strong>Cloud coverage:</strong>{' '}
            {props.responseObj.weather[0].description}.
          </p>
        </div>
      ) : null}
    </div>
  )
}

export default Conditions
