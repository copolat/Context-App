import React, {useContext, useState} from 'react';
import {ThemeContext} from '../contexts/ThemeContext';
import {TodoItemsContext} from '../contexts/TodoItemsContext';

function TodoList() {
  const [title, setTitle] = useState('');
  const {items, addItem, removeItem} = useContext(TodoItemsContext)
  const {isLightTheme, lightTheme, darkTheme} = useContext(ThemeContext);;
  const theme = isLightTheme ? lightTheme : darkTheme;

  const handleInput = (e) => {
    setTitle(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(title);
    setTitle('')
  }

  const handleClick = (e) => {
    removeItem(e.target.id)
  }

    return (
      <div className='todolist' style={{backgroundColor:theme.body, color: theme.text}}>
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleInput} value={title}/>
        </form>
        <ul>
          {(items.map(items =>{
            return <li id={items.id} key={items.id} className='far fa-trash-alt' onClick={()=>{removeItem(items.id)}}>{items.title}</li>
          }))}
        </ul>
      </div>
    )
}

export default TodoList;