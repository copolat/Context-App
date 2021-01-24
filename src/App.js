import Titlebar from './components/Titlebar';
import Navbar from './components/Navbar';
import TodoList from './components/TodoList';
import ThemeContextProvider from './contexts/ThemeContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
      <Titlebar />
      <Navbar />
      <TodoList/>
      </ThemeContextProvider>
    </div>
  );
}

export default App;