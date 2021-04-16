import React from 'react'

function Conditions(props) {
  // console.log(props)
  return (
    <div>
      {props.responseObj.cod === 200 ? (
        <div>
          <p>
            <strong>{props.responseObj.name}</strong>
          </p>
          <p>
            It`s currently{' '}
            <strong>{Math.round(props.responseObj.main.temp)}</strong> degrees
            out with <strong>{props.responseObj.weather[0].description}</strong>
            .
          </p>
        </div>
      ) : null}
    </div>
  )
}

export default Conditions
