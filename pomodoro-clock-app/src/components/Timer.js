import React from "react"

class Timer extends React.Component {
    constructor() {
        super()
        this.state = {
            isSession: true,
            timerSecond: 0
        }
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
                    <button type="button" className="btn btn-primary mx-3">Play</button>
                    <button type="button" className="btn btn-primary mx-3">Stop</button>
                    <button type="button" className="btn btn-primary mx-3">Refresh</button>
                </div>
            </div>
        )
    }
}

export default Timer