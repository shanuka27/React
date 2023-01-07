import React, { Component } from 'react'
import MemoComponent from './MemoComponent'
import PureComponents from './PureComponents'
import RegComp from './RegComp'

class ParentComp extends Component {
    
    constructor(props) {
      super(props)
    
      this.state = {
         name:' shanu'
      }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                name:'shanu'
            })
        },2000 
        )
    }

  render() {
    console.log('*************he he ************')
    return (
      <div>
        Parent Components
        <MemoComponent name={this.state.name}/>
        {/* <RegComp name= {this.state.name} /> */}
        {/* <PureComponents name = {this.state.name} /> */}
      </div>
    )
  }
}

export default ParentComp