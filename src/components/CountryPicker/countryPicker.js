import React, { useState, useEffect } from 'react'
import { NativeSelect, FormControl } from '@material-ui/core'
import { fetchCountries } from '../../api'

const CountryPicker = ({handleCountryChange}) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries())
    }
    fetchAPI()
  },[setFetchedCountries])
  
  return(
    <div className = 'row d-flex justify-content-center '>
      <FormControl className = ' mt-5 bg-light w-75  '>
        <NativeSelect defaultValue='' onChange={(e)=>handleCountryChange(e.target.value)}>
          <option value = ''>Global</option>
          {fetchedCountries.map((country, i) => <option key={i} value ={country}>{country}</option>)}
        </NativeSelect>
      </FormControl>
    </div>
  )
}
export default CountryPicker