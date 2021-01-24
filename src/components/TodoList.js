import React from 'react';

class TodoList extends React.Component {
  render() {
    return (
      <div className='todolist'>
        <input type="text"/>
        <ul>
          <li>Go to the market</li>
          <li>Get some milk</li>
          <li>Pay the bills</li>
        </ul>
      </div>
    )
  }
}

export default TodoList;