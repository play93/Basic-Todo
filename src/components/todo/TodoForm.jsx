import { useState } from "react";
import styled from "styled-components";
import { TaskItemActionButton } from "./TodoItem";

const TodoForm = () => {
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

    //addTodos(newTodoObj);

    //투두리스트는 새로 입력한 투두가 맨 위에 오는 것이 좋으므로
    //새로 만든 newTodo를 앞에, 나머지 todo는 스프레드오퍼레이터(...)로 뒤에 펼쳐줌

    setNewTodo(""); //초기화
  };

  return (
    <TaskForm action="">
      <TaskInput
        type="text"
        name=""
        id=""
        value={newTodo}
        onChange={handleInputChange}
        placeholder="할 일을 입력해 주세요 . . ."
      />
      <TaskButton type="submit" onClick={handleSubmit} color="#582be7">
        Add Todo
      </TaskButton>
    </TaskForm>
  );
};

export default TodoForm;

const TaskForm = styled.form`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

const TaskInput = styled.input`
  flex: 1;
  border-bottom: 2px solid #333;
  color: 333;
  padding: 0.5rem;
  transition: 0.3;

  &::placeholder {
    color: #999999;
    font-style: italic;
  }

  &:focus {
    border-color: #582be7;
  }
`;

const TaskButton = styled(TaskItemActionButton)``;
