import InputField from './components/InputField';
import './App.css';
import TodosList from './components/TodosList';
import { connect } from 'react-redux';
import { deleteAll } from './redux/action/addTodo.action';

function App() {
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
});

export default connect(null, mapDispatchToProps)(App);
