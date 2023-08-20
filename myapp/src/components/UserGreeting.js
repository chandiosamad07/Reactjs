import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isloggined: true,
    };
  }

  render() {
    if (this.state.isloggined) {
      return <div>Welcome Samad</div>;
    } else {
      return <div>Welcome Guest</div>;
    }
  }
}

export default UserGreeting;
