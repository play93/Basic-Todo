import TodoItem from "./TodoItem";
import { useTodoFilterdQuery } from "../../hooks/useTodoQuery";

const TodoList = () => {
  const { data, isLoading, error } = useTodoFilterdQuery();

  if (isLoading) {
    return <section className="flex flex-col gap-4">Loading...</section>;
  }

  if (error) {
    return (
      <section className="flex flex-col gap-4">Error: {error.message}</section>
    );
  }

  console.log(data);

  return (
    <section className="flex flex-col gap-4">
      <div>
        <h1 className="text-2xl font-bold">Tasks</h1>
      </div>
      <ul className="flex flex-col gap-4">
        {data.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </section>
  );
};

export default TodoList;
