import { useQuery } from "@tanstack/react-query";
import { getTodoDetail, getTodos } from "../api/todoClient";
import { useGetFilter } from "./useGetFilter";

export const useTodoFilterdQuery = () => {
  const { filter } = useGetFilter(); // 커스텀 훅 안에서 커스텀 훅을 사용

  return useQuery({
    queryKey: ["todos", filter],
    queryFn: () => getTodos(filter),
  });
};

export const useTodoQuery = (filter) => {
  return useQuery({
    queryKey: ["todos", filter],
    queryFn: () => getTodos(filter),
  });
};

//이름뒤에 Query를 붙여 서버상태를 관리하는지 명시적으로 구분해줄 수 있음!

export const useTodoDetailQuery = (id) => {
  return useQuery({
    queryKey: ["todos", id],
    queryFn: () => getTodoDetail(id),
  });
};
