import React, { Component } from "react";

class LifecycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "samad",
    };
    console.log("Life Cycle Component B");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Life Cycle B getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("Life cycle B Component Did Mount");
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
  render() {
    console.log("life cycle B render");
    return <div>Lifecycle B</div>;
  }
}

export default LifecycleB;
