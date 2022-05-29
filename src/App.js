import InputField from './components/InputField';
import './App.css';
import TodosList from './components/TodosList';
import { connect } from 'react-redux';
import { deleteAll, persistTodos } from './redux/action/addTodo.action';
import { useEffect } from 'react';

function App({ deleteAll, persistTodos }) {
  useEffect(() => {
    persistTodos();
    console.log('g');
  }, [persistTodos]);

  return (
    <div className="App">
      <h1 style={{ textDecoration: 'underline' }}>Todo App</h1>
      <InputField />
      <TodosList />
      <div>
        <button
          style={{ marginTop: '20px', cursor: 'pointer' }}
          onClick={deleteAll}
        >
          Delete All
        </button>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  deleteAll: () => dispatch(deleteAll()),
  persistTodos: () => dispatch(persistTodos()),
});

export default connect(null, mapDispatchToProps)(App);
