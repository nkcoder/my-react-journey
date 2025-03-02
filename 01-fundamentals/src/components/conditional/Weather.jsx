import React from 'react'

const Weather = ({temperature}) => {
  if (temperature < 15) {
    return <h1>It is chilly outside</h1>
  } else if (temperature >= 15 && temperature <= 25) {
    return <h1>It is nice outside</h1>
  } else {
    return <h1>It is hot outside</h1>
  }
}

export default Weather