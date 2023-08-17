import React, { Component } from 'react'

export class ClassClick extends Component {
    Handler(){
        console.log("Button Clicked")
    }
  render() {
    return (
      <div>
        
        <button onClick={this.Handler}>Click me</button>

      </div>
    )
  }
}

export default ClassClick
