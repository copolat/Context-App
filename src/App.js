import Titlebar from './components/Titlebar';
import Navbar from './components/Navbar';
import TodoList from './components/TodoList';
import ThemeContextProvider from './contexts/ThemeContext';
import AuthContextProvider from './contexts/AuthContext';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <ThemeContextProvider>
          <Titlebar />
          <Navbar />
          <TodoList />
        </ThemeContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;