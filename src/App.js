import logo from './logo.svg';
import InputField from './components/InputField';
import './App.css';
import TodosList from './components/TodosList';

function App() {
  return (
    <div className="App">
      <h1 style={{ textDecoration: 'underline' }}>Todo App</h1>
      <InputField />
      <TodosList />
    </div>
  );
}

export default App;
