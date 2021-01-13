import React from "react"

function Zip(props) {

    return (
        <div className="zip-cards container">
            <div class="d-flex flex-column">
                <h2 class='test'> {props.location}</h2>
                <ul>
                    <li>City: {props.city}</li>
                    <li>State: {props.state}</li>
                    <li>Population (estimated): {props.population}</li>
                    <li>Total Wages: {props.wages}</li>
                </ul>
            </div>
        </div>
    )
}

export default Zip