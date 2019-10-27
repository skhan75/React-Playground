import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';


//COMPONENT
import Home from './components/home';
import Posts from './components/posts';
import Profile from './components/profiles';

const App = () => {
  return(
    <BrowserRouter>
      <div>
        <header>
          <Link to="/"> Home </Link>
          <Link to="/posts"> Posts </Link>
          <Link to={{
              pathname: "/profile"
            }}> Profile </Link>
          <hr/>
        </header>
        <Route path="/" exact component={Home}/>
        <Route path="/posts" component={Posts}/>
        <Route path="/profile" component={Profile}/>
      </div>
    </BrowserRouter>
  )
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)
