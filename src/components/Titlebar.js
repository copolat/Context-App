import React from 'react';
import {ThemeContext} from '../contexts/ThemeContext';

class Titlebar extends React.Component {
  static contextType = ThemeContext;
  render(){
    const {isLightTheme, lightTheme, darkTheme} = this.context;
    const theme = isLightTheme ? lightTheme : darkTheme;
    return (
      <div className='title-bar' style={{backgroundColor:theme.titleBar, color: theme.text}}>
        <div className='branding'>To-Do App</div>
        <i className='fas fa-moon' onClick={this.context.toggleTheme}/>
      </div>
    )
  }
}

export default Titlebar;