import React from 'react'
import PropTypes from 'prop-types'
import MajorClock from './major-clock'

const SplitTimes = ({splits = []}) => {
  return splits.map((item, index) => (
    <MajorClock key={index} activated={false} milliseconds={item} />
  ))
}
SplitTimes.propTypes = {
  splits: PropTypes.arrayOf(PropTypes.number)
}

export default SplitTimes