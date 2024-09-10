import { createContext, useEffect, useState } from "react";
// import { SAMPLE_TODOS } from "../constants/sample-todos";
import { useNavigate } from "react-router-dom";
import { todoClient } from "../api/todoClient";

export const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  // const [todos, setTodos] = useState([SAMPLE_TODOS]);
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();

  const fetchTodos = async () => {
    const { data } = await todoClient.get("/");

    setTodos(data);
    console.log(data);
  };

  // console.log("~ TodoList ~ todos:", ...todos); //스프레드오퍼레이터로 객체를 배열에서 꺼내 펼쳐서 보여줌
  // console.log("~ TodoList ~ todos:", todos); //배열처럼 찍힘

  // const addTodos = (newTodoObj) => {
  //   setTodos([newTodoObj, ...todos]);
  // };

  const addTodos = async (newTodoObj) => {
    const { data } = await todoClient.post("/", newTodoObj);
    console.log(data);
    fetchTodos(); // db에 있는걸 업데이트 요청 (setState처럼)
  };

  // const toggleCompleted = (id) => {
  //   const updateTodos = todos.map((todo) => {
  //     if (todo.id === id) {
  //       //현재 항목의 id가 토글한(수정하려는) todo의 id가 같다면
  //       //수정된 값
  //       const newTodo = {
  //         // id: todo.id, //id는 그대로
  //         // text: todo.text, //text는 그대로
  //         ...todo, //위의 두 줄을 스프레드오퍼레이터를 사용해 한줄로
  //         completed: !todo.completed, //completed상태를 반전
  //         //completed: true <= 이렇게 입력하면 버튼을 한번 클릭했을 때 true로 바뀌는데, 두번클릭했을 때 다시 false로 바뀌지 않음
  //       };
  //       return newTodo;
  //     } else {
  //       //아니라면 기존 값
  //       return todo;
  //     }
  //   });
  //   setTodos(updateTodos);
  // };

  const toggleCompleted = async (id, completed) => {
    await todoClient.patch(`/${id}`, {
      completed,
    });
    fetchTodos();
  };

  // const handleDelete = (id) => {
  //   const deleteUpdateTodos = todos.filter((todo) => {
  //     // Note : 리택토링 이전 코드
  //     // if (todo.id === id) {
  //     //   //현재 항목의 id가 토글한(수정하려는) todo의 id가 같다면
  //     //   return false;
  //     // } else {
  //     //   return true;
  //     // }

  //     // Note : 리택토링 이전 코드3 (error! 앞에 리턴을 붙이지 않아서 모든 항목이 삭제됨)
  //     // todo.id === id ? false : true;

  //     // Note : 리택토링 이전 코드4
  //     // return todo.id === id ? false : true;

  //     return todo.id !== id;
  //   });
  //   setTodos(deleteUpdateTodos);
  //   navigate("/");
  // };

  const handleDelete = async (id) => {
    await todoClient.delete(`/${id}`);
    fetchTodos();
    navigate("/");
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const completedTodos = todos.filter((todo) => todo.completed);
  const pendingTodos = todos.filter((todo) => !todo.completed);

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodos,
        toggleCompleted,
        handleDelete,
        completedTodos,
        pendingTodos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
