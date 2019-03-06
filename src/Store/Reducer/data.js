import * as actionTypes from "../Action/types";

let initialState = {
  moviesfeed: []
};

export const fetchUserStart = (state, action) => {
  console.log(`i am reducer fetchUserStart`);
  return {
    ...state
  };
};

export const fetchUserSuccess = (state, action) => {
  return {
    ...state,
    moviesfeed: action.data
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_MOVIES:
      return fetchUserSuccess(state, action);
    default:
      return state;
  }
};

export default reducer;
