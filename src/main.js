import React, { Component } from "react";
import { Layout, Row, Col, Input } from "antd";
import SearchMovies from "./components/SearchMovies";
// import Addmovie from "./components/addmovie";

import Routes from "./components/route";
import "./style/main.css";

const { Header, Footer } = Layout;
export default class Main extends Component {
  render() {
    return (
      <div>
        <Layout className="layout">
          <Header>
            <Row gutter={16}>
              <Col span={8}>
                <SearchMovies />
              </Col>

              <Col span={8}>
                <a href="/">
                  <h3 className="headertitle">Trending Movies</h3>
                </a>
              </Col>
            </Row>
          </Header>
          {/* <Addmovie /> */}
          {/* <Container /> */}
          <Routes />
          <Footer
            style={{
              position: "fixed",
              bottom: 0,
              textAlign: "center",
              width: "100%",
              background: "#7d7a7af7"
            }}
          >
            Trending Movies ©2018 Created by Sathish
          </Footer>
        </Layout>
      </div>
    );
  }
}
