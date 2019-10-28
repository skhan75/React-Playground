import React from 'react';

const Conditional = () => {
  const value = true;

  const returnValue = () => {
    return false;
  }

  const showIt = () => {
    return ( returnValue() ?
      <div>
        Hello, it's True
      </div>
      :
      <div>
        Hello, it's False
      </div>
    )
  }

  return (
    <div>
      { showIt() }

    </div>
  )
}

export default Conditional;
