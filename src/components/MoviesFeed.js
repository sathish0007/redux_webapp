import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../Store/Action";
import { Card, Modal, Rate } from "antd";
const { Meta } = Card;
class MoviesFeed extends Component {
  constructor() {
    super();
    this.state = {
      movies: []
    };
  }

  // componentDidMount() {
  //   this.props.moviesdata();
  // }
  // componentDidUpdate(props) {
  //   console.log(props);
  //   console.log("inside did update");
  //   if (props !== this.props) {
  //     this.setState({ movies: this.props.movies });
  //   }
  // }
  // componentWillReceiveProps(props) {
  //   console.log(props);
  //   console.log("inside did receive props");
  //   if (props !== this.props) {
  //     this.setState({ movies: this.props.movies });
  //   }
  // }
  showdetail = obj => {
    console.log(obj);
    Modal.success({
      title: obj.Title,
      content: (
        <div>
          <Card
            hoverable
            cover={
              <img
                height="465"
                width="300"
                alt="example"
                src={obj.Poster ? obj.Poster : require("../style/movie.jpg")}
                onError={e => {
                  e.target.onerror = null;
                  e.target.src = require("../style/movie.jpg");
                }}
              />
            }
          >
            <Meta
              title={obj.Title}
              description={`Website @ ${
                obj.Website ? obj.Website : "trendingmovies.com"
              }`}
            />
            <Rate allowHalf defaultValue={8.6} />
          </Card>
          <ul className="moviedata">
            <li>
              <strong>Director</strong>:
              <span className="movieitems">
                {obj.Director ? obj.Director : "no data"}
              </span>
            </li>
            <li>
              <strong>Actors</strong>:
              <span className="movieitems">
                {obj.Actors ? obj.Actors : "no data"}
              </span>
            </li>
            <li>
              <strong>Realeased @</strong>:
              <span className="movieitems">
                {obj.Year ? obj.Year : "no data"}
              </span>
            </li>
            <li>
              <strong>Awards</strong>:
              <span className="movieitems">
                {obj.Awards ? obj.Awards : "no data"}
              </span>
            </li>
            <li>
              <strong>Story</strong>:
              <span className="movieitems">
                {obj.Plot ? obj.Plot : "no data"}
              </span>
            </li>
          </ul>
        </div>
      )
    });
  };
  render() {
    console.log(this.props.movies);
    let movieList =
      this.props.Allmovies && this.props.Allmovies.length > 0 ? (
        this.props.Allmovies.map((obj, i) => {
          if (obj.imdbID !== undefined) {
            return (
              <a key={i} href={`/clickedmovie?i=${obj.imdbID}`} target="_blank">
                <Card
                  hoverable
                  cover={
                    <img
                      height="465"
                      width="300"
                      alt="example"
                      src={
                        obj.Poster ? obj.Poster : require("../style/movie.jpg")
                      }
                      onError={e => {
                        e.target.onerror = null;
                        e.target.src = require("../style/movie.jpg");
                      }}
                    />
                  }
                >
                  <Meta
                    title={obj.Title}
                    description={`Realeased @ ${obj.Year}`}
                  />
                </Card>
              </a>
            );
          } else {
            return (
              <Card
                key={i}
                hoverable
                cover={
                  <img
                    height="465"
                    width="300"
                    alt="example"
                    src={
                      obj.Poster ? obj.Poster : require("../style/movie.jpg")
                    }
                    onError={e => {
                      e.target.onerror = null;
                      e.target.src = require("../style/movie.jpg");
                    }}
                  />
                }
                onClick={this.showdetail.bind(this, obj)}
              >
                <Meta
                  title={obj.Title}
                  description={`Realeased @ ${obj.Year}`}
                />
              </Card>
            );
          }
        })
      ) : (
        <Card
          hoverable
          cover={
            <img
              alt="example"
              height="300"
              width="300"
              src={require("../style/nodata.png")}
            />
          }
        />
      );
    return <div>{movieList}</div>;
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
    moviesdata: () => dispatch(actions.fetchData())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviesFeed);
