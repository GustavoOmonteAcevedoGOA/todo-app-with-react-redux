import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo } from '../redux/action/addTodo.action';

function Todo({ todo, idx, deleteTodo }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        border: '1px solid #ffffffa6',
        padding: '5px',
      }}
    >
      <div>{todo}</div>
      <div style={{ cursor: 'pointer' }} onClick={() => deleteTodo(idx)}>
        x
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  deleteTodo: (id) => dispatch(deleteTodo(id)),
});

export default connect(null, mapDispatchToProps)(Todo);
//state, actions
