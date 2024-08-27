import styled from "styled-components";

const TodoItem = ({ todo, toggleCompleted, handleDelete }) => {
  return (
    <TaskItem key={todo.id}>
      <TaskItemContent>
        <p>
          {todo.text} - {String(todo.completed)}
        </p>
      </TaskItemContent>
      <TaskItemActions>
        <TaskItemActionButton
          onClick={() => toggleCompleted(todo.id)}
          color="#582be7"
        >
          완료
        </TaskItemActionButton>
        <TaskItemActionButton
          onClick={() => handleDelete(todo.id)}
          color="#f05656"
        >
          삭제
        </TaskItemActionButton>
      </TaskItemActions>
    </TaskItem>
  );
};

export default TodoItem;

const TaskItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 1rem;
  border-radius: 1rem;
  background-color: white;
`;

const TaskItemContent = styled.div``;

const TaskItemActions = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`;

const TaskItemActionButton = styled.button`
  color: white;
  background-color: ${({ color }) => color};

  padding: 0.4rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  &:hover {
    opacity: 70%;
  }
`;
