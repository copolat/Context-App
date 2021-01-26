import React from 'react';
import {ThemeContext} from '../contexts/ThemeContext';

class TodoList extends React.Component {
  static contextType = ThemeContext;
  render() {
    const {isLightTheme, lightTheme, darkTheme} = this.context;
    const theme = isLightTheme ? lightTheme : darkTheme
    return (
      <div className='todolist' style={{backgroundColor:theme.body, color: theme.text}}>
        <input type="text"/>
        <ul>
          <li className='far fa-trash-alt'>Go to the market</li>
          <li className='far fa-trash-alt'>Get some milk</li>
          <li className='far fa-trash-alt'>Pay the bills</li>
        </ul>
      </div>
    )
  }
}

export default TodoList;