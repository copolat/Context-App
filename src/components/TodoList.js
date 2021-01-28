import React, {useContext} from 'react';
import {ThemeContext} from '../contexts/ThemeContext';

function TodoList() {
    const {isLightTheme, lightTheme, darkTheme} = useContext(ThemeContext);;
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

export default TodoList;