import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';


//COMPONENT
import Home from './components/home';
import Posts from './components/posts';
import Profile from './components/profiles';
import PostItem from './components/post_items';
import Life from './components/lifecycles';
import Conditional from './components/conditional';
import User from './components/user';

const App = () => {
  return(
    <BrowserRouter>
      <div>
        <header>
          <NavLink
            to="/"
          > Home </NavLink><br/>
          <NavLink
            to="/posts"
            activeStyle={{color:'red'}}
            activeClassName='selected'
          > Posts </NavLink><br/>
          <NavLink
            to={{
              pathname: "/profile"
            }}
            activeStyle={{color:'red'}}
            activeClassName='selected'
          > Profile </NavLink><br/>
          <NavLink to="/life">Life</NavLink><br/>
          <NavLink to="/conditional">Conditional</NavLink><br/>
          <NavLink to="/user">User</NavLink>
          <hr/>
        </header>

        <Switch>
          <Route path="/posts/:id/:username" component={PostItem}/>
          <Route path="/posts" component={Posts}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/life" component={Life}/>
          <Route path="/conditional" component={Conditional}/>
          <Route path="/user" component={User}/>
          <Route path="/" exact component={Home}/>
          <Route render={()=> <h3>Oops 404!!</h3>}/>
        </Switch>

      </div>
    </BrowserRouter>
  )
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)
