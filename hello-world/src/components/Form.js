import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         username: '',
         Comments: '',
         Topic: ''
      }
    }

    handleUsernameChange = event => {
        this.setState({
            username: event.target.value
        })
    }

    handleCommentsChange = event => {
        this.setState({
            Comments: event.target.value
        })
    }

    handleTopicChange = event => {
        this.setState({
            Topic: event.target.value
        })
    }

    handleSubmit = event => {
        alert(`${this.state.username} ${this.state.Comments} ${this.state.Topic}`)
        event.preventDefault();
    }

  render() {
    return (
        <form onSubmit = {this.handleSubmit}>
            <div>
                <lable>Username</lable>
                <input 
                    type='text' 
                    value={this.state.username} 
                    onChange={this.handleUsernameChange} 
                />
            </div>
            <div>
                <lable>Comments</lable>
                <textarea 
                    value= {this.state.Comments}
                    onChange = {this.handleCommentsChange}
                />
            </div>
            <div>
                <lable>topic</lable>
                <select value={this.state.Topic} onChange={this.handleTopicChange}>
                    <option value = 'React'>React</option>
                    <option value = 'Angular'>Angular</option>
                    <option value = 'vue'>Vue</option>
                </select>
            </div>
            <button type='submit'>submit</button>
        </form>
    )
  }
}

export default Form