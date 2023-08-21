import React, { Component } from 'react'

 class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:'',
         comment:'',
         topic:'react'
      }
    }
    
    handlerNameChange= (event)=>{
        this.setState({
            username:event.target.value
        })
    }
    handlerCommentChange = (event)=>{
        this.setState({
            comment:event.target.value
        })
    }

    handlerTopicChange = event =>{
        this.setState({
            topic:event.target.value
        })
    }

    handleSubmit = event =>{
        alert(`${this.state.username} ${this.state.comment} ${this.state.topic}`)
    }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
        <label>User Name</label>
        <input type='text' value={this.state.username} onChange={this.handlerNameChange}></input>
        </div>
        <div>
            <label>Comments</label>
            <textarea value={this.state.comment} onChange={this.handlerCommentChange}></textarea>
        </div>

        <div>
            <label>Topic</label>
           <select value={this.state.topic} onChange={this.state.handlerTopicChange}>
            <option value="react"> React</option>
            <option value="Angular"> Angular</option>
            <option value="Vue"> Vue</option>
           </select>
        </div>
        
        <button type='submit'>submit</button>

      </form>
    )
  }
}

export default Form
