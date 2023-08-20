import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isloggined: false
    };
  }

  render() {


    return(
        this.state.isloggined ? 
        <div>Welcome Abdul Samad</div>:
        <div>Welcome Guest</div>
    )

    // let message
    // if(this.state.isloggined){
    //     message = <div>Welcome Abdul Samad</div>
    // }
    // else{
    //     message = <div>Welcome Guest</div>
    // }
    // return <div>{message}</div>


    // if (this.state.isloggined) {
    //   return <div>Welcome Samad</div>;
    // } else {
    //   return <div>Welcome Guest</div>;
    // }
  }
}

export default UserGreeting;
