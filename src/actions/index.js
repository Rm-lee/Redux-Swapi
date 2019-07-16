import axios from 'axios'
// we'll need axios
export const FETCHING = 'FETCHING'
export const SUCCESS = 'FETCH_SUCCESS'
export const FAILED = 'FETCH_FAILED'
// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator

export function getCharsFromApi(){
 return(dispatch) => {
  dispatch({type: FETCHING})

  axios.get('https://swapi.co/api/people/')
  .then((response) => {
   dispatch({ type: SUCCESS, payload: response.data})
  })
  .catch((err) => {
   dispatch({type: FAILED, payload:err.respons.data})
  })
 }
}
