import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }

  render() {

    return this.state.isLoggedIn && <div>welcome shanu</div>

    //recommended

    // return(
    //     this.state.isLoggedIn ?
    //     <div>welcome shanu</div>:
    //     <div>welcome guest</div>
    // )
    //

    // let Message
    // if(this.state.isLoggedIn){
    //     Message = <div>welcome shanu</div>
    // }else{
    //     Message = <div>welcome guest</div>
    // }
    // return <div>{Message}</div>
    // if(this.state.isLoggedIn){
    //     return(
    //         <div>
    //             <div>welcome shanu</div>
    //         </div>
    //     )
    // }else{
    //     return (
    //         <div>
    //             <div>welcome guest</div>
    //         </div>
    //     )
    // }
  }
}

export default UserGreeting