const TodoItem = ({ todo, toggleCompleted, handleDelete }) => {
  return (
    <li key={todo.id}>
      <p>
        {todo.text} - {String(todo.completed)}
      </p>
      <button onClick={() => toggleCompleted(todo.id)}>완료</button>
      <button onClick={() => handleDelete(todo.id)}>삭제</button>
    </li>
  );
};

export default TodoItem;
