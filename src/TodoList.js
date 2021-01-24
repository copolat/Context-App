import React from 'react';

class TodoList extends React.Component {
  render(){
    return (
      <div className='todolist'>
        <input type="text"/>
        <ul>
          <li>Go to market</li>
          <li>Buy some milk</li>
          <li>Pay bills</li>
        </ul>
      </div>
    )
  }
}

export default TodoList;