import React, {useContext} from 'react';
import {ThemeContext} from '../contexts/ThemeContext';
import {TodoItemsContext} from '../contexts/TodoItemsContext';

function TodoList() {
  const {items} = useContext(TodoItemsContext)
    const {isLightTheme, lightTheme, darkTheme} = useContext(ThemeContext);;
    const theme = isLightTheme ? lightTheme : darkTheme
    return (
      <div className='todolist' style={{backgroundColor:theme.body, color: theme.text}}>
        <input type="text"/>
        <ul>
          {(items.map(items =>{
            return <li key={items.id} className='far fa-trash-alt'>{items.title}</li>
          }))}
          
          <li className='far fa-trash-alt'>Get some milk</li>
          <li className='far fa-trash-alt'>Pay the bills</li>
        </ul>
      </div>
    )
}

export default TodoList;