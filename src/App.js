import React from 'react';
import Navbar from './Navbar';
import TodoList from './TodoList';
import TitleBar from './TitleBar';


class App extends React.Component {
  render(){
    return (
      <div>
        <TitleBar />
        <Navbar />
        <TodoList />
      </div>
    )
  }
}

export default App;