import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../Store/Action";
import { Input } from "antd";
const Search = Input.Search;
class SearchMovies extends Component {
  constructor() {
    super();
  }
  search = data => {
    console.log(data.length);
    if (data.length > 2) {
      this.props.search(data);
    }
  };
  render() {
    return (
      <Search
        placeholder="Search Movies"
        onSearch={value => this.search(value)}
        style={{ width: 200 }}
      />
    );
  }
}

const mapStateToProps = state => {
  console.log(`msp`);
  console.log(state);
  return {
    movies: state.data.moviesfeed
  };
};

const mapDispatchToProps = dispatch => {
  return {
    search: val => dispatch(actions.fetchSearchData(val))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchMovies);
