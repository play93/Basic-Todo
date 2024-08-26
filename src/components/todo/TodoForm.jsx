import { useState } from "react";

const TodoForm = ({ addTodos }) => {
  const [newTodo, setNewTodo] = useState("");

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
      id: crypto.randomUUID(),
      text: newTodo,
      completed: false,
    };

    // setTodos([
    //   { id: crypto.randomUUID(), text: newTodo, completed: false },
    //   ...todos,
    // ]);

    addTodos(newTodoObj);

    //투두리스트는 새로 입력한 투두가 맨 위에 오는 것이 좋으므로
    //새로 만든 newTodo를 앞에, 나머지 todo는 스프레드오퍼레이터(...)로 뒤에 펼쳐줌

    setNewTodo(""); //초기화
  };

  return (
    <form action="">
      <input
        type="text"
        name=""
        id=""
        value={newTodo}
        onChange={handleInputChange}
      />
      <button type="submit" onClick={handleSubmit}>
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
