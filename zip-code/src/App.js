import React from "react"
import axios from 'axios'
import './App.css'
import Zip from './components/zipCode'
import City from './components/City'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      comment: "hello",
      count: 0,
      zipCodes: [],
      cities: [],
      cityName: ''
    }
  }

  getZip = (zip) => {
    zip.preventDefault()
    let zipcode = zip.target.userEnteredZip.value
    if (zipcode.length !== 5 && (typeof zipcode) !== 'number') {
      console.error("Zipcode is not recognizable. Please try again")
      return
    }
    // do fetch call in here
    console.log('http://ctp-zip-api.herokuapp.com/zip/' + zipcode)
    axios.get('http://ctp-zip-api.herokuapp.com/zip/' + zipcode)
      .then(response => {
        const apiResponse = response.data
        console.log(apiResponse)
        this.setState({
          zipCodes: apiResponse
        })
      })
  }

  getCity = (city) => {
    city.preventDefault()
    let cityName = city.target.userEnteredCity.value.toString().toUpperCase()
    const API_ENDPOINT = "http://ctp-zip-api.herokuapp.com/city/"
    console.log()
    axios.get(API_ENDPOINT + cityName.toString().toUpperCase())
      .then(response => {
        const apiResponse = response.data
        console.log(apiResponse)
        this.setState({
          cities: apiResponse,
          cityName: cityName
        })
      })


  }

  render() {
    return (
      <div>
        <div className="header">
          <h1 className="text-center">Zip Code Search</h1>
        </div>
        <div className="d-flex container justify-content-around">
          <form className="my-3" onSubmit={(e) => this.getZip(e)}>
            <label>
              Enter Zip:<br />
              <input name="userEnteredZip" type="text" zip="zip" />
            </label>
            <input className="mx-3" type="submit" value="Submit" />
          </form>

          <form className="my-3" onSubmit={(e) => this.getCity(e)}>
            <label>
              Enter City:<br />
              <input name="userEnteredCity" type="text" city="city" />
            </label>
            <input className="mx-3" type="submit" value="Submit" />
          </form>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          {this.state.zipCodes.map(data =>
            <div key={data.RecordNumber}
              className="zip m-3 p-3">
              <Zip
                city={data.City}
                state={data.State}
                population={data.EstimatedPopulation}
                wages={data.TotalWages}
                location={data.LocationText}
              />
            </div>
          )}
          {this.state.cities.map(data =>
            <div key={data}
              className="city">
              <City
                zipCode={data}
                cityName={this.state.cityName} />
            </div>
          )}
        </div>
          )
      </div>
    )
  }
}

export default App