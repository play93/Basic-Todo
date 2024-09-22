import { useState } from "react";
import { useCreateTodoMutation } from "../../hooks/useTodoMutation";

const TodoForm = () => {
  const [newTodo, setNewTodo] = useState("");
  const { mutate } = useCreateTodoMutation();

  const handleInputChange = (e) => {
    console.dir(e); //메서드를 콘솔에 출력해주는 명령어
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newTodo.trim()) {
      return;
    }

    const newTodoObj = {
      // id: crypto.randomUUID(),
      text: newTodo,
      completed: false,
    };

    // setTodos([
    //   { id: crypto.randomUUID(), text: newTodo, completed: false },
    //   ...todos,
    // ]);

    //addTodos(newTodoObj);

    //투두리스트는 새로 입력한 투두가 맨 위에 오는 것이 좋으므로
    //새로 만든 newTodo를 앞에, 나머지 todo는 스프레드오퍼레이터(...)로 뒤에 펼쳐줌

    mutate(newTodoObj);

    setNewTodo(""); //초기화
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-row gap-4">
      <input
        className="flex-1 p-2 border-2 border-black rounded-lg outline-none text-base text-[#333] bg-white transition-colors focus:border-[#582be7]"
        type="text"
        name="todo"
        value={newTodo}
        onChange={handleInputChange}
        placeholder="할 일을 입력해 주세요 . . ."
      />
      <button
        type="submit"
        className="text-white bg-[#582be7] py-2 px-4 rounded-lg cursor-pointer hover:opacity-80"
        onClick={handleSubmit}
      >
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
