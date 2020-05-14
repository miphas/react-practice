import React from 'react'
import MajorClock from './major-clock'
import ControlButtons from './control-buttons'
import SplitTimes from './split-times'

class StopWatch extends React.Component {
  constructor() {
    super(...arguments)
    this.state = {
      isStarted: false,
      startTime: null,
      currentTime: null,
      splits: [],
    }
    this.onStart = this.onStart.bind(this)
    this.onPause = this.onPause.bind(this)
    this.onSplit = this.onSplit.bind(this)
    this.onReset = this.onReset.bind(this)
  }
  render() {
    const {onStart, onPause, onSplit, onReset} = this
    const {isStarted, startTime, currentTime, splits} = this.state
    
    return (
      <React.Fragment>
        <style jsx>
          {
            `h1 { color: green; }`
          }
        </style>
        <h1>秒表</h1>
        <MajorClock activated={isStarted} milliseconds={currentTime - startTime} />
        <ControlButtons activated={isStarted} onStart={onStart} onPause={onPause} onSplit={onSplit} onReset={onReset} />
        <SplitTimes splits={splits} />
      </React.Fragment>
    )
  }
  /**
   * 启动秒表
   */
  onStart() {
    this.intervalHandle = setInterval(() => {
      this.setState({
        currentTime: new Date()
      })
    }, 1000 / 60)
    const now = new Date()
    const lastStartTime = this.state.startTime
    const lastCurrentTime = this.state.currentTime
    this.setState({
      isStarted: true,
      startTime: new Date(now - (lastCurrentTime - lastStartTime)),
      currentTime: now
    })
  }
  /**
   * 暂定秒表
   */
  onPause() {
    if (this.intervalHandle) {
      clearTimeout(this.intervalHandle)
      this.intervalHandle = null
    }
    this.setState({
      isStarted: false
    })
  }
  /**
   * 记录秒表值
   */
  onSplit() {
    const {splits, currentTime, startTime} = this.state
    this.setState({
      splits: [...splits, currentTime - startTime]
    })
  }
  /**
   * 重置秒表
   */
  onReset() {
    this.setState({
      isStarted: false,
      startTime: null,
      currentTime: null,
      splits: [],
    })
  }
}

export default StopWatch