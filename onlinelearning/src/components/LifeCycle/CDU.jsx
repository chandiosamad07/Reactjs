import React, { Component } from 'react'

export default class CDU extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    
  render() {
    return (
      <div>
        <button >Update counter {counter}</button>
      </div>
    )
  }
}
