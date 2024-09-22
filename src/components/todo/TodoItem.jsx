import { Link, useNavigate } from "react-router-dom";
import {
  useDeleteTodoMutation,
  useToggleTodoMutation,
} from "../../hooks/useTodoMutation";

const TodoItem = ({ todo }) => {
  const navigate = useNavigate();

  const { mutateAsync: handleDelete, isPending } = useDeleteTodoMutation();
  const { mutate: handleToggle } = useToggleTodoMutation();

  return (
    <li
      key={todo.id}
      className="flex flex-row justify-between item-center p-4 bg-white rounded-2xl "
    >
      <div>
        <p style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
          <Link to={`/${todo.id}`} className="hover:underline">
            {todo.text}
          </Link>
          {String(todo.completed)}
        </p>
      </div>
      <div className="flex flex-row gap-4 items-center justify-center">
        <button
          className="text-white bg-[#582be7] py-2 px-4 rounded-lg cursor-pointer hover:opacity-80"
          onClick={() =>
            handleToggle({ id: todo.id, completed: !todo.completed })
          }
          color="#582be7"
        >
          {todo.completed ? "취소" : "완료"}
        </button>
        <button
          className="text-white bg-[#f05656] py-2 px-4 rounded-lg cursor-pointer hover:opacity-80"
          onClick={async () => {
            handleDelete(todo.id);
            navigate("/");
          }}
          color="#f05656"
        >
          {isPending ? "삭제 중" : "삭제"}
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
