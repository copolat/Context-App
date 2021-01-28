import React, {createContext, useState} from 'react';

export const TodoItemsContext = createContext();


function TodoItemsContextProvider(props) {
  const [items, setItems] = useState([]);

  const addItem = (title) => {
    setItems([...items, {title: title, id: Date.now()}])
   
  }

  const removeItem = (id) => {
    const newArray = items.filter(item => item.id !== id);
    setItems(newArray)
  }
  return (
    <TodoItemsContext.Provider value={{items, addItem: addItem, removeItem: removeItem}}>
      {props.children}
    </TodoItemsContext.Provider>
  )
}

export default TodoItemsContextProvider;