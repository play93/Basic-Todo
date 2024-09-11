import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoDashboard from "./TodoDashboard";
import styled from "styled-components";
//팁) 변수 바꿀 때 f2누르면 뜨는 입력창에서 변수명을 수정하면 연결되어있는 것도 한꺼번에 바뀜!!
//팁) 서버 끊을 땐 ctrl + c
//팁) id 생성시 crypto.randomUUID() 사용 => 암호화된 고유한 ID생성
//팁) 제대로 했는데 왜 안되지? 싶을 땐 서버를 껐다가 켜보기

const TodoContainer = () => {
  return (
    <TodoContainerWrapper>
      {/* <TodoDashboard />
      <TodoForm /> */}
      <TodoList />
    </TodoContainerWrapper>
  );
};
//제어컴포넌트에서 상태 관리할 때 쓰는 hook => useState
//onChange 이벤트 핸들러를 사용해 입력값이 변경될 때마다 상태를 업데이트

//form태그는 사용자 입력을 수집, 제출하는 역할
//enter키로 제출이 가능
//주의해야할점 => e.preventDefault() 를 반드시 최상단에 넣어줘야함.
//이유 => 새로고침을 막기 위해.

//유니크한 key값이 들어가야 해당 요소가 어디에 있는지 위치를 판단할 수 있음
//그리고 이 key값으로 요소를 찾아 삭제하거나, 수정해주므로 맵에선 항상 key가 있어야 하며, 하나뿐인 유니크한 값이어야 함

export default TodoContainer;

const TodoContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;
