import React, { Component } from 'react'

export default class Toggle extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        status:true
      }
    }
    ShowData = () =>{
        this.setState({
            status : true
        })
    }
    HideData = () =>{
        this.setState({
            status : false
        })
    }
  render() {
    return (
      <div>
        {
           this.state.status?<h1>Hello world</h1>:null
        }
        <button onClick={this.ShowData}>Show</button>
        <button onClick={this.HideData}>Hide</button>
      </div>
    )
  }
}
