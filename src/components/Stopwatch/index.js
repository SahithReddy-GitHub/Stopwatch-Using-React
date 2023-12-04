import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {minutes: 0, seconds: 0}

  onStart = () => {
    this.intervalId = setInterval(() => {
      const {minutes, seconds} = this.state
      if (seconds === 59) {
        console.log('hi')
        this.setState(prevState => ({
          minutes: prevState.minutes + 1,
          seconds: 0,
        }))
      } else {
        this.setState(prevState => ({
          seconds: prevState.seconds + 1,
        }))
      }
    }, 1000)
  }

  onStop = () => {
    clearInterval(this.intervalId)
  }

  onReset = () => {
    clearInterval(this.intervalId)
    this.setState({minutes: 0, seconds: 0})
  }

  render() {
    const {minutes, seconds} = this.state
    return (
      <div className="bg">
        <div className="con">
          <h1 className="head">Stopwatch</h1>
          <div className="card">
            <div className="img-con">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="img"
              />
              <p className="para">Timer</p>
            </div>
            <h1 className="time">{`${Math.floor(minutes / 10)}${
              minutes % 10
            }:${Math.floor(seconds / 10)}${seconds % 10}`}</h1>
            <div className="btn-con">
              <button
                type="button"
                onClick={this.onStart}
                className="btn green"
              >
                Start
              </button>
              <button type="button" onClick={this.onStop} className="btn red">
                Stop
              </button>
              <button
                type="button"
                onClick={this.onReset}
                className="btn orange"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
