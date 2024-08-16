import React, { Component } from 'react'

export default class CDU extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }

    update =()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    componentDidUpdate (p,s,ss){
        console.log("componentDidUpdate",s)
    }
  render() {
    return (
      <div>
        <button onClick={this.update}>Update counter {this.state.count}</button>
      </div>
    )
  }
}
