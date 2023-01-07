import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycyleA extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name:'shanu'
      }
      console.log('LifeCycleA con')
    }

    static getDerivedStateFormProps(props, state){
        console.log('LifeCycleA GetDer...')
        return null
    }

    componentDidMount(){
        console.log('compoA...Did')
    }
    
    shouldComponentUpdate(){
        console.log('A should...')
        return true
    }

    getSnapshotBeforeUpdate(){
        console.log('A getSnap...')
        return null
    }

    componentDidUpdate(){
        console.log('A update...')
        return null
    }

    changeState = () => {
        this.setState({
            name:'code...'
        })
    }

  render() {
    console.log('renderA')
    return (
      <div>
        Life Cycyle A<br />
        <button onClick={this.changeState}>Change State</button>
        <LifeCycleB />
      </div>
    )
  }
}

export default LifeCycyleA