import React from "react"

function SessionLength(props) {
    return (
        <div><h4 className="text-center my-3">Session Length</h4>
            <section className="d-flex mx-5 align-items-center">
                <button type="button" className="btn btn-primary mx-3">Down</button>
                <p className="mx-2">{props.sessionLength}</p>
                <button type="button" className="btn btn-primary mx-3">Up</button>

            </section>
        </div>
    )
}

export default SessionLength