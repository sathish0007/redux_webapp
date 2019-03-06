import React, { Component } from "react";
import queryString from "query-string";
import axios from "axios";
import { Card, Layout, Rate } from "antd";
const { Meta } = Card;
const { Content } = Layout;
class MovieView extends Component {
  constructor() {
    super();
    this.state = {
      moviedata: {}
    };
  }

  async componentDidMount() {
    console.log(window.location);
    const parsed = queryString.parse(window.location.search);
    console.log(parsed.i);
    const moviedata = await axios.get(
      `http://www.omdbapi.com/?apikey=7e029c3&i=${parsed.i}`
    );
    this.setState({ moviedata: moviedata.data });
  }

  render() {
    let moviedata =
      this.state.moviedata.Response &&
      this.state.moviedata.Response === "True" ? (
        <div>
          <Card
            hoverable
            cover={
              <img
                height="465"
                width="300"
                alt="example"
                src={this.state.moviedata.Poster}
                onError={e => {
                  e.target.onerror = null;
                  e.target.src = require("../style/movie.jpg");
                }}
              />
            }
          >
            <Meta
              title={this.state.moviedata.Title}
              description={`Realeased @ ${this.state.moviedata.Website}`}
            />
            <Rate
              allowHalf
              defaultValue={parseInt(this.state.moviedata.imdbRating)}
            />
          </Card>
          <ul className="moviedata">
            <li>
              <strong>Director</strong>:
              <span className="movieitems">
                {this.state.moviedata.Director
                  ? this.state.moviedata.Director
                  : "no data"}
              </span>
            </li>
            <li>
              <strong>Actors</strong>:
              <span className="movieitems">
                {this.state.moviedata.Actors
                  ? this.state.moviedata.Actors
                  : "no data"}
              </span>
            </li>
            <li>
              <strong>Realeased @</strong>:
              <span className="movieitems">
                {this.state.moviedata.Released
                  ? this.state.moviedata.Released
                  : "no data"}
              </span>
            </li>
            <li>
              <strong>Awards</strong>:
              <span className="movieitems">
                {this.state.moviedata.Awards
                  ? this.state.moviedata.Awards
                  : "no data"}
              </span>
            </li>
            <li>
              <strong>Story</strong>:
              <span className="movieitems">
                {this.state.moviedata.Plot
                  ? this.state.moviedata.Plot
                  : "no data"}
              </span>
            </li>
          </ul>
        </div>
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
          {moviedata}
        </div>
      </Content>
    );
  }
}

export default MovieView;
