import fetchJsonp from 'fetch-jsonp'

// Global Function
const search_results = (json) => {
  return json
}

// Config
import { AIRBNB_SEARCH_RESULTS_URL, AIRBNB_SEARCH_URL } from 'config/airbnb'

// Constants
export const LOAD_AIRBNB_DATA = 'LOAD_AIRBNB_DATA'

// Actions
export function loadAirBnBData (results) {
  return {
    type: LOAD_AIRBNB_DATA,
    payload: {
      results
    }
  }
}

export function submitToAirBnb (location, checkin, checkout, guests) {
  return function (dispatch) {
    window.location.replace(
      AIRBNB_SEARCH_URL +
    `?location=${location}&checkin=${checkin}&checkout=${checkout}&guests=${guests}`
    )
  }
}

export function fetchAirBnbData () {
  return function (dispatch) {
    fetch(AIRBNB_SEARCH_RESULTS_URL)
      .then((response) => {
        return response.text()
      })
      .then((jsonText) => {
        dispatch(loadAirBnBData(eval(jsonText)))
      })

    // fetchJsonp(AIRBNB_SEARCH_RESULTS_URL, {
    //   jsonpCallback: 'search_results'
    // })
    //   .then(function (response) {
    //     console.log('RESPONSE', response.text())
    //     return response.json()
    //   }).then(function (json) {
    //     console.log('PARSED JSON', json)
    //     dispatch(loadAirBnBData(json))
    //   }).catch(function (error) {
    //     console.log('PARSING FAILED', error)
    //   })
  }
}

// Reducers
const initialState = {
  results: []
}

export default function airbnbReducer (state = initialState, action) {
  switch (action.type) {
    case LOAD_AIRBNB_DATA:
      return Object.assign({}, state, {
        results: action.payload.results
      })
    default:
      return state
  }
}
