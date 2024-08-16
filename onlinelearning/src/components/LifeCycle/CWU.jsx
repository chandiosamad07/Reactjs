import React, { Component } from 'react'

export default class CWU extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         show:true
      }
    }

    WillMount = ()=>{
        this.setState({
            show:!this.state.show
        })
    }
    
  render() {
    return (
      <div>
        <h1>Componet will Unmount</h1>
      {
       this.state.show?<Child />:null
      }  
        <button onClick={this.WillMount}>Toggle</button>
      </div>
    )
  }
}



class Child extends Component {
    componentWillUnmount(){
        console.log("componentWillUnmount")
    }
  render() {
    return (
      <div>
        <h2>This is child component</h2>
      </div>
    )
  }
}
