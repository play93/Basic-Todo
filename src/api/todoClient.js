import axios from "axios";

export const todoClient = axios.create({
  baseURL: "http://localhost:3000/todos",
});

// API함수 완성
// 이름에 맞지 않는 내용 삭제
// todoClient를 통해 요청을 보내는 것만 남김

// 모든 투두리스트 가져오기
export const getTodos = async (filter) => {
  const searchParams = new URLSearchParams();

  if (filter === "completed") {
    searchParams.append("completed", true);
  }

  if (filter === "pending") {
    searchParams.append("completed", false);
  }

  const { data } = await todoClient.get(`?${searchParams.toString()}`);

  return data;
};

// 하나의 투두 가져오기
export const getTodoDetail = async (id) => {
  const { data } = await todoClient.get(`/${id}`);

  return data;
};

// 투두 생성
export const postTodo = async (newTodoObj) => {
  const { data } = await todoClient.post("/", newTodoObj);

  return data; // db에 있는걸 업데이트 요청 (setState처럼)
};

// 투두 완료/미완료 토글
export const toggleTodo = async (id, completed) => {
  const { data } = await todoClient.patch(`/${id}`, {
    completed,
  });

  return data;
};

// 투두 삭제
export const deleteTodo = async (id) => {
  const { data } = await todoClient.delete(`/${id}`);

  return data;
};
