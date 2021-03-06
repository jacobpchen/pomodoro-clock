import React from "react"

function Break(props) {
    const decreaseCounter = () => {
        console.log(props.break)
        if (props.break === 1) {
            return
        }
        props.decreaseBreak()
    }

    const increaseCounter = () => {
        if (props.break === 60) {
            return;
        }
        props.increaseBreak()
    }

    return (
        <div>
            <h4 className="text-center my-3">Break Length</h4>
            <section className="d-flex mx-5 ">
                <div className="d-flex flex-row align-itens-center justify-content-center">
                    <button
                        disabled={props.isPlay === true ? "disabled" : ""}
                        onClick={decreaseCounter} type="button"
                        className="btn btn-primary mx-3">Down</button>
                    <p className="mx-2 mt-3">{props.break}</p>
                    <button
                        disabled={props.isPlay === true ? "disabled" : ""}
                        onClick={increaseCounter} type="button"
                        className="btn btn-primary mx-3 ">Up</button>
                </div>
            </section>
        </div>
    )
}

export default Break