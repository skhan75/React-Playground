import React, { Component } from 'react';
import '../css/styles.css'

class Header extends Component {

 //P.S. You should always avoid using Class Components with State as it uses more memory
 // and are hard to maintain. Rather use Functional components as they are light weight
  state = {
    keywords: ""
  }

  // Arrow function declaration removes the need of using bind with this,
  // as it refers to the scope of the class
  inputChangeHandler = (event) => {
    this.setState({
      keywords: event.target.value
    })
  }

  render() {
    return (
      <header className="header">
        <div className="logo">Logo</div>
        <input
          type="text"
          onChange={this.inputChangeHandler}
        />

      </header>
    )
  }
}

export default Header;
