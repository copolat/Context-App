import React from 'react';

class TitleBar extends React.Component {
  render(){
    return (
      <div className='title-bar'>
        <div className='branding'>To-Do App</div>
        <div className=''></div>
        <i className='fas fa-moon'/>
      </div>
    )
  }
}

export default TitleBar;