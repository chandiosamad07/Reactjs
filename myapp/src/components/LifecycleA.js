    import React, { Component } from 'react'
import LifecycleB from '../LifecycleB'
    
   class LifecycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'samad'
      }
      console.log('Life Cycle Component A')
    }

    static getDerivedStateFromProps(props,state){
        console.log('Life Cycle A getDerivedStateFromProps')
        return null
    }


    componentDidMount(){
        console.log('Life cycle A Component Did Mount')
    }
    
      render() {
        console.log('life cycle A render')
        return (
            <>
          <div>
            Lifecycle A
          </div>
            <LifecycleB/>
          </>
        )
      }
    }
    
    export default LifecycleA
    