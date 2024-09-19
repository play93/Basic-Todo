import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTodo, postTodo, toggleTodo } from "../api/todoClient";

export const useCreateTodoMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
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
};

export const useDeleteTodoMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id) => deleteTodo(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
  });
};

export const useToggleTodoMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, completed }) => toggleTodo(id, completed),
    // mutationFn 에는 매개변수를 하나만 넘겨줄 수 있어서 여러개를 넘겨줄 경우, 객체로 만들어 가져와야함!
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
  });
};

// 유지보수성(커스텀 훅을 수정하면 해당 커스텀 훅을 사용하는 모든 컴포넌트에 적용됨)
// 가독성(이름만 보고 무슨 기능을 하는지 알 수 있음)
