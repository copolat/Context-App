import React, {createContext, useState} from 'react';

export const TodoItemsContext = createContext();


function TodoItemsContextProvider(props) {
  const [items, setItems] = useState([
    {title: "Go to the market", id: 1},
    {title: "Get some milk", id: 2},
    {title: "Pay the bills", id: 3}
  ]);
  return (
    <TodoItemsContext.Provider value={{items}}>
      {props.children}
    </TodoItemsContext.Provider>
  )
}

export default TodoItemsContextProvider;