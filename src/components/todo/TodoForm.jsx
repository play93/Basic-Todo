import { useState } from "react";
import styled from "styled-components";
import { TaskItemActionButton } from "./TodoItem";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postTodo } from "../../api/todoClient";

const TodoForm = () => {
  const [newTodo, setNewTodo] = useState("");
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    // mutate는 await가 안먹는데 mutateAsync는 await를 먹음 => await가 필요할 때 mutateAsync를 사용하면됨
    // 예) 뭔가 추가하고 나서 다른 페이지로 넘어가야 할 때
    // 추가가 끝난 다음에 다음 페이지로 넘어가야함
    // 추가가 끝날때 까지 기다려 줘야 하니까 이 경우 mutateAsync를 사용
    mutationFn: (todo) => postTodo(todo),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
  });

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
