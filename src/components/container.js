import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../Store/Action";

import MoviesFeed from "./MoviesFeed";
import Addmovie from "./addmovie";

import { Layout, message } from "antd";
const { Content } = Layout;

class Container extends Component {
  state = {
    addmovie: false
  };
  addmovie = obj => {
    const data = this.props.movies;
    console.log(data);
    data.unshift(obj);
    console.log(data);
    this.setState({ addmovie: true });
  };
  success = () => {
    message.success("Movie Added successfully", 2);
    this.setState({ addmovie: false });
  };
  componentDidMount() {
    this.props.moviesdata();
  }
  // componentWillReceiveProps(props) {
  //   console.log(props);
  //   console.log("inside did receive props");
  //   if (props !== this.props) {
  //     this.setState({ movies: this.props.movies });
  //   }
  // }
  componentDidUpdate() {
    if (this.state && this.state.addmovie) {
      this.success();
    }
  }
  render() {
    console.log(this.props);
    return (
      <Content style={{ padding: "0 50px" }}>
        <div
          style={{
            background: "#fff",
            padding: "10%",
            width: "60%",
            margin: "0 auto",
            minHeight: 280,
            overflow: "hidden"
          }}
        >
          <Addmovie funAddMovie={this.addmovie} />
          <MoviesFeed
            Allmovies={this.props.movies}
            newmovie={this.state.addmovie}
          />
        </div>
      </Content>
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
    moviesdata: () => dispatch(actions.fetchData()),
    addmovie: data => dispatch(actions.addData(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
