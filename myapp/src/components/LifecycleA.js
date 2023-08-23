import React, { Component } from "react";
import LifecycleB from "../LifecycleB";

class LifecycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "samad",
    };
    console.log("Life Cycle Component A");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Life Cycle A getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("Life cycle A Component Did Mount");
  }

  shouldComponentUpdate() {
    console.log("Life cycle A shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Life cycle A GetsnapshotbeforeUpdate");
    return null
  }
  componentDidMount() {
    console.log("Life cycle A Component Did Mount");
  }

  stateChange =()=>{
    this.setState({
        name:'Chandio'
    })
  }

  render() {
    console.log("life cycle A render");
    return (
      <>
        <div>Lifecycle A</div>
        <button onClick={this.stateChange}>Change state</button>
        <LifecycleB />
      </>
    );
  }
}

export default LifecycleA;
