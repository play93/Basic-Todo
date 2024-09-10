import { BrowserRouter } from "react-router-dom";
import TodoProvider from "./context/TodoContext";
import Router from "./Router";

const App = () => {
  return (
    <BrowserRouter>
      <TodoProvider>
        <Router />
      </TodoProvider>
    </BrowserRouter>
  );
};

export default App;
