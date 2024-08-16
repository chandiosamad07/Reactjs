import React, { Component } from "react";

export default class Forms extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
      Topic: "react",
    };
  }
  UsernameHandler = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  ComeentHandler = (e) => {
    this.setState({
      comments: e.target.value,
    });
  };

  handlerTopic = (e) => {
    this.setState({
      Topic: e.target.value,
    });
  };

  submit = () => {
    alert(`${this.state.username} ${this.state.comments} ${this.state.Topic} `);
  };
  render() {
    return (
      <form onSubmit={this.submit}>
        <div>
          <label htmlFor="">username</label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.UsernameHandler}
          ></input>
        </div>
        <label htmlFor="">Comments</label>
        <textarea
          value={this.state.comments}
          onChange={this.ComeentHandler}
        ></textarea>
        <div>
          <select value={this.state.Topic} onChange={this.handlerTopic}>
            <option value="react">React</option>

            <option value="angular">Angular</option>

            <option value="vue">Vue</option>
          </select>
        </div>

        <button type="submit">submit</button>
      </form>
    );
  }
}
