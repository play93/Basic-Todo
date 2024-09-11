import { BrowserRouter } from "react-router-dom";
import TodoProvider from "./context/TodoContext";
import Router from "./Router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const App = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <TodoProvider>
          <Router />
        </TodoProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;
