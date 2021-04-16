import React from 'react'

function Conditions(props) {
  return (
    <div>
      {props.responseObj.status === 200 ? (
        <div>
          <p>
            <strong>{props.responseObj.name}</strong>
          </p>
          <p>
            It`s currently {Math.round(props.responseObj.main.temp)} degrees out
            with {props.responsObj.weather[0].descrioption}.
          </p>
        </div>
      ) : null}
    </div>
  )
}

export default Conditions
