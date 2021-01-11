import React from "react"

function SessionLength(props) {
    const increaseSession = () => {
        if (props.sessionLength === 60)
            return
        else
            props.increaseSession()
    }

    const decreaseSession = () => {
        if (props.sessionLength === 1)
            return
        else
            props.decreaseSession()
    }

    return (
        <div><h4 className="text-center my-3">Session Length</h4>
            <section className="d-flex mx-5 align-items-center">
                <button disabled={props.isPlay === true ? "disabled" : ""}
                    onClick={decreaseSession} type="button"
                    className="btn btn-primary mx-3">Down</button>
                <p className="mx-2">{props.sessionLength}</p>
                <button disabled={props.isPlay === true ? "disabled" : ""}
                    onClick={increaseSession} type="button"
                    className="btn btn-primary mx-3">Up</button>

            </section>
        </div>
    )
}

export default SessionLength