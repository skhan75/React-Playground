import React, { Component } from 'react';
import '../css/styles.css'

class Header extends Component {

  inputChangeHandler(event) {
    console.log(event.target.value)
  }

  render() {

    return (
      <header className="header">
        <div className="logo">Logo</div>
        <input
          type="text"
          onChange={(e) => this.inputChangeHandler(e)}
        />
      </header>
    )
  }
}

export default Header;
