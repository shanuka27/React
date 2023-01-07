import React, { Component } from 'react'

class LifeCycyleB extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name:'shanu'
      }
      console.log('LifeCycleB con')
    }

    static getDerivedStateFormProps(props, state){
        console.log('LifeCycleB GetDer...')
        return null
    }

    componentDidMount(){
        console.log('compoB...Did')
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

  render() {
    console.log('renderB')
    return (
      <div>
        Life Cycyle B
      </div>
    )
  }
}

export default LifeCycyleB