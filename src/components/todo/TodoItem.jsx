import { useContext } from "react";
import styled from "styled-components";
import { TodoContext } from "../../context/TodoContext";

const TodoItem = ({ todo }) => {
  const { toggleCompleted, handleDelete } = useContext(TodoContext);
  return (
    <TaskItem key={todo.id}>
      <TaskItemContent>
        <p style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
          {todo.text} - {String(todo.completed)}
        </p>
      </TaskItemContent>
      <TaskItemActions>
        <TaskItemActionButton
          onClick={() => toggleCompleted(todo.id)}
          color="#582be7"
        >
          {todo.completed ? "취소" : "완료"}
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
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
`;

const TaskItemContent = styled.div``;

const TaskItemActions = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`;

export const TaskItemActionButton = styled.button`
  color: white;
  background-color: ${({ color }) => color};

  padding: 0.4rem 1rem;
  border-radius: 0.5rem;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    opacity: 70%;
  }
`;
