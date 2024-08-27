import { useState } from "react";
import { SAMPLE_TODOS } from "../../constants/sample-todos";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoDashboard from "./TodoDashboard";
import styled from "styled-components";
//팁) 변수 바꿀 때 f2누르면 뜨는 입력창에서 변수명을 수정하면 연결되어있는 것도 한꺼번에 바뀜!!
//팁) 서버 끊을 땐 ctrl + c
//팁) id 생성시 crypto.randomUUID() 사용 => 암호화된 고유한 ID생성
//팁) 제대로 했는데 왜 안되지? 싶을 땐 서버를 껐다가 켜보기

const TodoContainer = () => {
  const [todos, setTodos] = useState(SAMPLE_TODOS);

  // console.log("~ TodoList ~ todos:", ...todos); //스프레드오퍼레이터로 객체를 배열에서 꺼내 펼쳐서 보여줌
  // console.log("~ TodoList ~ todos:", todos); //배열처럼 찍힘

  const addTodos = (newTodoObj) => setTodos([newTodoObj, ...todos]);

  const toggleCompleted = (id) => {
    const updateTodos = todos.map((todo) => {
      if (todo.id === id) {
        //현재 항목의 id가 토글한(수정하려는) todo의 id가 같다면
        //수정된 값
        const newTodo = {
          // id: todo.id, //id는 그대로
          // text: todo.text, //text는 그대로
          ...todo, //위의 두 줄을 스프레드오퍼레이터를 사용해 한줄로
          completed: !todo.completed, //completed상태를 반전
          //completed: true <= 이렇게 입력하면 버튼을 한번 클릭했을 때 true로 바뀌는데, 두번클릭했을 때 다시 false로 바뀌지 않음
        };
        return newTodo;
      } else {
        //아니라면 기존 값
        return todo;
      }
    });
    setTodos(updateTodos);
  };

  const handleDelete = (id) => {
    const deleteUpdateTodos = todos.filter((todo) => {
      // Note : 리택토링 이전 코드
      // if (todo.id === id) {
      //   //현재 항목의 id가 토글한(수정하려는) todo의 id가 같다면
      //   return false;
      // } else {
      //   return true;
      // }

      // Note : 리택토링 이전 코드3 (error! 앞에 리턴을 붙이지 않아서 모든 항목이 삭제됨)
      // todo.id === id ? false : true;

      // Note : 리택토링 이전 코드4
      // return todo.id === id ? false : true;

      return todo.id !== id;
    });
    setTodos(deleteUpdateTodos);
  };

  return (
    <TodoContainerWrapper>
      <TodoDashboard all={todos.length} completed={6} pending={1} />
      <TodoForm addTodos={addTodos} />

      <TodoList
        todos={todos}
        toggleCompleted={toggleCompleted}
        handleDelete={handleDelete}
      />
    </TodoContainerWrapper>
  );
};
//제어컴포넌트에서 상태 관리할 때 쓰는 hook => useState
//onChange 이벤트 핸들러를 사용해 입력값이 변경될 때마다 상태를 업데이트

//form태그는 사용자 입력을 수집, 제출하는 역할
//enter키로 제출이 가능
//주의해야할점 => e.preventDetault() 를 반드시 최상단에 넣어줘야함.
//이유 => 새로고침을 막기 위해.

//유니크한 key값이 들어가야 해당 요소가 어디에 있는지 위치를 판단할 수 있음
//그리고 이 key값으로 요소를 찾아 삭제하거나, 수정해주므로 맵에선 항상 key가 있어야 하며, 하나뿐인 유니크한 값이어야 함

export default TodoContainer;

const TodoContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;
