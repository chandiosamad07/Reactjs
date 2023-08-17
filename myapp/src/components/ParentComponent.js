import React, { Component } from 'react'
import ChildComponents from './ChildComponents'

class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName:'parent'
      }
      this.greetParent = this.greetParent.bind(this)
    }
    
   greetParent(childname){
    alert(`Hello ${this.state.parentName} from ${childname}`)
   } 
  render() {
    return (
      <div>
        <ChildComponents  greetHandler={this.greetParent}/>
      </div>
    )
  }
}

export default ParentComponent
