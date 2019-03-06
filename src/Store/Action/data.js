import * as actionTypes from "./types";
import axios from "axios";

export const fetchMovies = data => {
  return {
    type: actionTypes.FETCH_MOVIES,
    data
  };
};

export const fetchData = () => async dispatch => {
  try {
    let data = await axios.get("http://www.omdbapi.com/?apikey=7e029c3&s=star");
    console.log(data);
    dispatch(fetchMovies(data.data.Search));
  } catch (err) {
    console.log(err);
  }
};
export const fetchSearchData = val => async dispatch => {
  try {
    let data = await axios.get(
      `http://www.omdbapi.com/?apikey=7e029c3&s=${val}`
    );
    console.log(data);
    console.log(data.data.Response);
    if (data.data.Response === "True") {
      dispatch(fetchMovies(data.data.Search));
    } else {
      dispatch(fetchMovies([]));
    }
  } catch (err) {
    console.log(err);
  }
};
export const addData = data => async dispatch => {
  try {
    console.log(data);
    dispatch(fetchMovies(data));
  } catch (err) {
    console.log(err);
  }
};
