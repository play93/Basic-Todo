import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTodo, toggleTodo } from "../../api/todoClient";

const TodoItem = ({ todo }) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutateAsync: handleDelete, isPending } = useMutation({
    mutationFn: (id) => deleteTodo(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
  });

  const { mutate: handleToggle } = useMutation({
    mutationFn: ({ id, completed }) => toggleTodo(id, completed),
    // mutationFn 에는 매개변수를 하나만 넘겨줄 수 있어서 여러개를 넘겨줄 경우, 객체로 만들어 가져와야함!
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
  });

  return (
    <TaskItem key={todo.id}>
      <TaskItemContent>
        <p style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
          <TaskLink to={`/${todo.id}`}>{todo.text}</TaskLink>
          {String(todo.completed)}
        </p>
      </TaskItemContent>
      <TaskItemActions>
        <TaskItemActionButton
          onClick={() =>
            handleToggle({ id: todo.id, completed: !todo.completed })
          }
          color="#582be7"
        >
          {todo.completed ? "취소" : "완료"}
        </TaskItemActionButton>
        <TaskItemActionButton
          onClick={async () => {
            handleDelete(todo.id);
            navigate("/");
          }}
          color="#f05656"
        >
          {isPending ? "삭제 중" : "삭제"}
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
const TaskLink = styled(Link)`
  &:hover {
    text-decoration: underline;
  }
`;
