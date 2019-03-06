import React, { Component } from "react";
import { Layout } from "antd";
const { Content } = Layout;
export default class Notfoundpage extends Component {
  render() {
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
          <img
            alt="example"
            height="300"
            width="300"
            src={require("../style/404page.jpg")}
          />
        </div>
      </Content>
    );
  }
}
