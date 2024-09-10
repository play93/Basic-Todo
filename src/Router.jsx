import { Routes, Route } from "react-router-dom";
import RootLayout from "./components/layout/RootLayout";
import Home from "./page/Home";
import TodoDetailPage from "./page/TodoDetailPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<TodoDetailPage />} />
      </Route>
    </Routes>
  );
};

export default Router;
