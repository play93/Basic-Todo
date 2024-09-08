import RootLayout from "./components/layout/RootLayout";
import TodoProvider from "./context/TodoContext";
import Router from "./Router";

const App = () => {
  return (
    <RootLayout>
      <TodoProvider>
        <Router />
      </TodoProvider>
    </RootLayout>
  );
};

export default App;
