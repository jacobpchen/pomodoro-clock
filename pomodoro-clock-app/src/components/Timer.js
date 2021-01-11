import React from "react"

class Timer extends React.Component {
    constructor() {
        super()
        this.state = {
            isSession: true,
            timerSecond: 0,
            intervalId: 0
        }
        this.playTimer = this.playTimer.bind(this)
        this.decreaseTimer = this.decreaseTimer.bind(this)
        this.stopTimer = this.stopTimer.bind(this)
        this.resetTimer = this.resetTimer.bind(this)
    }

    playTimer = () => {
        this.props.onPlayStopTimer(true)
        let intervalId = setInterval(this.decreaseTimer, 1000)

        this.setState({
            intervalId: intervalId
        })
    }

    stopTimer = () => {
        clearInterval(this.state.intervalId)
        this.props.onPlayStopTimer(false)
    }

    decreaseTimer = () => {
        switch (this.state.timerSecond) {
            case 0:
                if (this.props.timerMinute === 0) {
                    if (this.state.isSession) {
                        this.setState({
                            isSession: false
                        })
                        this.props.toggleInterval(this.state.isSession)
                    } else {
                        this.setState({
                            isSession: true
                        })
                        this.props.toggleInterval(this.state.isSession)
                    }
                } else {
                    this.props.decreaseTimerMinute()
                    this.setState({
                        timerSecond: 59
                    })
                }
                break;
            default:
                this.setState(prevState => {
                    return {
                        timerSecond: prevState.timerSecond - 1
                    }
                })
                break;
        }
    }

    resetTimer = () => {
        this.stopTimer()
        this.props.resetTimer()
        this.props.onPlayStopTimer(false)
        this.setState({
            timerSecond: 0,
            isSession: true
        })
    }

    onPlayStopTimer() {
        this.props.onPlayStopTimer()
    }

    render() {
        return (
            <div>
                <section className="border py-3 px-5 my-3 rounded">
                    <section className="d-flex flex-column align-items-center">
                        <h4 className="mx-5">{this.state.isSession === true ? "Session" : "Break"}</h4>
                        <div>
                            <span>{this.props.timerMinute}</span>
                            <span>:</span>
                            <span>{this.state.timerSecond === 0 ? "00" : this.state.timerSecond < 10 ?
                                "0" + this.state.timerSecond : this.state.timerSecond}</span>
                        </div>
                    </section>
                </section>
                <div>
                    <button onClick={this.playTimer} type="button" className="btn btn-primary mx-3">Play</button>
                    <button onClick={this.stopTimer} type="button" className="btn btn-primary mx-3">Stop</button>
                    <button onClick={this.resetTimer} type="button" className="btn btn-primary mx-3">Refresh</button>
                </div>
            </div>
        )
    }
}

export default Timer