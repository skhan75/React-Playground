import React, { Component } from 'react';
import Transition from 'react-transition-group/Transition';
import '../css/App.css';

class TransitionComp extends Component{

  state = {
    show: false
  }

  showDiv = () => {
    this.setState({
      show: !this.state.show ? true : false
    })
  }

  render(){
    return(
      <div>
        <Transition
          in={this.state.show}
          timeout={{
            enter: 2000,
            exit: 20
          }}
          enter={true}
          exit={true}

          onEnter={(node) => {
            console.log("ENTER")
          }}

          onExit={(node) => {
            console.log("EXIT")
          }}
        >
        { state =>
          <div className={`square square-${state}`}>
            { `square square-${state}` }
          </div>
         }
        </Transition>
        <div
          className="showDiv"
          onClick={this.showDiv}
        > Show or Hide </div>
      </div>

    )
  }
}


export default TransitionComp;
