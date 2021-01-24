import React from 'react';

class Titlebar extends React.Component {
  render(){
    return (
      <div className='title-bar'>
        <div className='branding'>To-Do App</div>
        <i className='fas fa-moon'/>
      </div>
    )
  }
}

export default Titlebar;