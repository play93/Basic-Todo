import { useParams } from "react-router-dom";
import TodoItem from "./TodoItem";

const TodoDetail = () => {
  const { id } = useParams();

  const todo = todos.find((todo) => {
    return todo.id === id;
  });

  if (!todo) {
    return <section>404 Not Found</section>;
  }

  return (
    <section>
      <TodoItem todo={todo} />
    </section>
  );
};

export default TodoDetail;
