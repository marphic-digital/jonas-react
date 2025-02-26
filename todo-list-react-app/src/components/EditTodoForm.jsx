import React, { useState } from "react";

const TodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);
  const handleSubmit = function (e) {
    e.preventDefault();

    editTodo(value, task.id);
    setValue("");
  };
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={value}
        placeholder="edit task"
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="todo-btn" type="submit">
        Edit Task
      </button>
    </form>
  );
};

export default TodoForm;
