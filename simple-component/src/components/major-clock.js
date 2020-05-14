import React from 'react'
import PropTypes from 'prop-types'
import padStart from 'lodash/padStart'
import './major-clock.css'

const ms2Time = (milliseconds) => {
  let time = milliseconds

  const ms = milliseconds % 1000
  time = (time - ms) / 1000

  const seconds = time % 60
  time = (time - seconds) / 60

  const minutes = time % 60
  const hours = (time - minutes) / 60

  const resultArray = [padStart(hours, 2, '0'), padStart(minutes, 2, '0'), padStart(seconds, 2, '0'), padStart(ms, 3, '0')]
  return resultArray.join(':')
}

const MajorClock = ({milliseconds = 0, activated = false}) => {
  return (
    <div className="clock">
      <style jsx>{
        `h1 {
          color: ${activated ? 'red' : 'black'};
          font-family: monospace;
        }`
      }</style>
      <h1>{ms2Time(milliseconds)}</h1>
    </div>
  )
}
MajorClock.propTypes = {
  activated: PropTypes.bool.isRequired,
  milliseconds: PropTypes.number.isRequired
}

export default MajorClock