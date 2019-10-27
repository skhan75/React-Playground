import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const Profiles = (props) => {
  return (
    <div>
      <Link to={{
        pathname: `${props.match.url}/posts`
      }}>take me to /profile/posts</Link>
    </div>
  )
}

export default Profiles;
