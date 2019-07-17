import { FETCHING, SUCCESS, FAILED } from "../actions/index";
const initialState = {
  characters: [],
  fetching: false,
  error:null
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCHING: {
      
      return {
        ...state,
        fetching: true,
      }
    }
    case SUCCESS: {
    
      return {
        
        characters: action.payload.results,
        fetching:false
      }
    }
    case FAILED: {
      return {
        
        error: action.payload,
        fetching:false
      }
    }
    default:
      return state;
  }
};
