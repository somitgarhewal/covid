import React, { Component } from 'react'
import { Cards, Chart, CountryPicker } from './components'
import 'bootstrap/dist/css/bootstrap.css'
import { fetchData } from './api'
import titleImage from './images/covid-19.jpeg'

class App extends Component{
  state = {
    data: {},
    country: ''
  }

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  }

  render(){
    const { data, country } = this.state;

    return(
      <div className = "container p-3 bg-dark ">
      <img className= 'img-responsive img-fluid max-width:100% mx-auto d-block mt-3 mb-3' src = {titleImage}/>
      <Cards data={data}/>
      <CountryPicker handleCountryChange = {this.handleCountryChange}/>
      <Chart data={data} country={country} />      
      </div>
    )
  }
}

export default App;

