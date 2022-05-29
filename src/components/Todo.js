import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo, editTodo } from '../redux/action/addTodo.action';

function Todo({ todo, idx, deleteTodo, editTodo, selected, text }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        border: '1px solid #ffffffa6',
        padding: '5px',
        cursor: 'pointer',
      }}
    >
      <div onClick={() => editTodo(idx)}>{selected === idx ? text : todo}</div>
      <div style={{ cursor: 'pointer' }} onClick={() => deleteTodo(idx)}>
        x
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  text: state.text,
  selected: state.selected,
});

const mapDispatchToProps = (dispatch) => ({
  deleteTodo: (id) => dispatch(deleteTodo(id)),
  editTodo: (id) => dispatch(editTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
//state, actions
