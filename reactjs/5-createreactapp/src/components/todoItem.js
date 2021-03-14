// eslint-disable-next-line no-unused-vars
import React, { Component} from 'react';
import '../css/TodoItem.css';

class TodoItem extends Component {
  render() {
    const    item    = this.props;
    let className = "TodoItem";
    if (item.TodoItem.isComplete) {
      className += " TodoItem-done";
    }
    return (
      <div className={className}>
        <p>{this.props.TodoItem.title}</p>
      </div>
    );
  }
}
export default TodoItem;