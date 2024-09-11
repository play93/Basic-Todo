import TodoItem from "./TodoItem";
import { useQuery } from "@tanstack/react-query";
import { getTodoDetail } from "../../api/todoClient";

const TodoDetail = ({ id }) => {
  const {
    data: todo,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["todos", id],
    queryFn: () => getTodoDetail(id),
  });

  if (isLoading) {
    return <section>Loading...</section>;
  }

  if (error) {
    return <section>Error: {error.message}</section>;
  }

  if (!todo) {
    return <section>404 Not Found Todo!</section>;
  }

  return (
    <section>
      <TodoItem todo={todo} />
    </section>
  );
};

export default TodoDetail;
