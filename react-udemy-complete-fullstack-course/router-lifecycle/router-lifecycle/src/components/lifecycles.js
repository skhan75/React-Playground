
import React, { Component } from 'react';

class Life extends Component {

  // 1 get default props
  // 2 set default state
  state = {
    title: 'Life Cycles'
  }
  // 3 before render --> Default Life Cycle method
  componentWillMount() {
    console.log('WILL MOUNT')
  }

  // 5 After
  componentDidMount() {
    console.log('MOUNTED')
  }

  componentWillUpdate() {
    console.log('BEFORE UPDATE')
  }

  componentDidUpdate() {
    console.log('AFTER UPDATE')
  }

  shouldComponentUpdate(nextProps, nextState) {
    if(nextState.title === "something else"){
      return false;
    }
    return true;
  }

  componentWillReceiveProps() {
    console.log("BEFORE RECIEVE PROPS ")
  }

  // Example when user logs out, this function will tell you that
  componentWillUnmount() {
    console.log("UNMOUNT")
  }

  // 4 render
  render() {
    return(
      <div>
        <h3>{this.state.title}</h3>
        <div onClick={
          ()=> this.setState({
            title:'something elsse'
          })
        }>CLICK TO CHANGE</div>
      </div>
    )
  }


}

export default Life;
