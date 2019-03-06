import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../Store/Action";
import { Form, Icon, Input, Button, InputNumber, Modal } from "antd";
class NewMovie extends Component {
  constructor() {
    super();
    this.state = { visible: false };
  }

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        // const data = this.props.movies;
        // console.log(data);
        // data.unshift(values);
        // console.log(data);
        this.props.funAddMovie(values);
        this.setState({
          visible: false
        });
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="addnewmovie">
        <Button type="primary" onClick={this.showModal}>
          Add movie
        </Button>
        {this.state.visible ? (
          <Modal
            title="Add movie"
            visible={this.state.visible}
            onOk={this.handleOk}
            footer={null}
            onCancel={this.handleCancel}
          >
            <Form onSubmit={this.handleSubmit} className="login-form">
              <Form.Item>
                {getFieldDecorator("Title", {
                  rules: [
                    { required: true, message: "Please input movie title!" }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    placeholder="movie title"
                  />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator("Director", {
                  rules: [
                    {
                      required: true,
                      message: "Please input movie Director name!"
                    }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    placeholder="Director name"
                  />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator("Actors", {
                  rules: [
                    {
                      required: true,
                      message: "Please input movie Actors name!"
                    }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    placeholder="Actors name"
                  />
                )}
              </Form.Item>

              <Form.Item>
                {getFieldDecorator("Released", {
                  rules: [
                    {
                      required: true,
                      message: "Please Enter Released time !"
                    }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    placeholder="Enter Released time eg.16 May 2013"
                  />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator("Awards", {
                  rules: [
                    {
                      required: true,
                      message: "Please Enter Awards detail !"
                    }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    placeholder="Enter Released Awards detail"
                  />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator("Plot", {
                  rules: [
                    {
                      required: true,
                      message: "Please Enter Story !"
                    }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    placeholder=" Enter shortly Story"
                  />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator("Year", {
                  rules: [
                    {
                      required: true,
                      // number: true,
                      message: "Please input valid realeased year!"
                    }
                  ]
                })(
                  <InputNumber
                    min={1950}
                    max={2019}
                    prefix={
                      <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    placeholder="Released year"
                  />
                )}
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Modal>
        ) : null}
      </div>
    );
  }
}
const addForm = Form.create({ name: "addform" })(NewMovie);
const mapStateToProps = state => {
  console.log(`msp`);
  console.log(state);
  return {
    movies: state.data.moviesfeed
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addmovie: data => dispatch(actions.addData(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(addForm);
