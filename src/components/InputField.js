import React from 'react';
import { connect } from 'react-redux';
import { addText, addTodo, editAddTodo } from '../redux/action/addTodo.action';
// addText,text,selected,editAddTodo,addTodo
const InputField = (props) => {
  const handleChange = (e) => props.addText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.selected || props.selected === 0) {
      props.editAddTodo({
        value: props.text,
        selected: props.selected,
      });
    } else {
      props.addTodo(props.text);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="todo"
        value={props.text}
        placeholder="Enter your todo"
        onChange={handleChange}
      />
    </form>
  );
};

const mapStateToProps = ({ text, selected }) => ({
  text,
  selected,
});

const mapDispatchToProps = (dispatch) => ({
  addTodo: (todo) => dispatch(addTodo(todo)),
  addText: (value) => dispatch(addText(value)),
  editAddTodo: (obj) => dispatch(editAddTodo(obj)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InputField);
