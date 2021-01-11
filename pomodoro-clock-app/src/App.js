import React from "react"
import Break from "./components/Break"
import SessionLength from "./components/Session"
import Timer from "./components/Timer"
import './App.css'


class App extends React.Component {
  constructor() {
    super()

    this.state = {
      breakLength: 5,
      sessionLength: 25,
      timerMinute: 25
    }
    this.onIncreaseBreakLength = this.onIncreaseBreakLength.bind(this)
    this.onDecreaseBreakLength = this.onDecreaseBreakLength.bind(this)
    this.onIncreaseSessionLength = this.onIncreaseSessionLength.bind(this)
    this.onDecreaseSessionLength = this.onDecreaseSessionLength.bind(this)
  }

  onIncreaseBreakLength() {
    this.setState(prevState => {
      return {
        breakLength: prevState.breakLength + 1
      }
    })
  }

  onDecreaseBreakLength() {
    this.setState(prevState => {
      return {
        breakLength: prevState.breakLength - 1
      }
    })
  }

  onIncreaseSessionLength() {
    this.setState(prevState => {
      return {
        sessionLength: prevState.sessionLength + 1,
        timerMinute: prevState.sessionLength + 1
      }
    })
  }

  onDecreaseSessionLength() {
    this.setState(prevState => {
      return {
        sessionLength: prevState.sessionLength - 1,
        timerMinute: prevState.sessionLength - 1
      }
    })
  }



  render() {
    return (
      <main className="container d-flex flex-column justify-content-center align-items-center my-5">
        <h2 className="font-weight-bold">Pomodoro Clock</h2>
        <div className="d-flex">
          <Break
            break={this.state.breakLength}
            increaseBreak={this.onIncreaseBreakLength}
            decreaseBreak={this.onDecreaseBreakLength}

          />
          <SessionLength
            sessionLength={this.state.sessionLength}
            increaseSession={this.onIncreaseSessionLength}
            decreaseSession={this.onDecreaseSessionLength}
          />
        </div>
        <Timer
          timerMinute={this.state.timerMinute}
          breakTimer={this.state.breakLength}
        />
      </main>
    )
  }
}

export default App