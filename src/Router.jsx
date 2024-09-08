import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "./components/layout/RootLayout";
import Home from "./page/Home";
import TodoDetailPage from "./page/TodoDetailPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<TodoDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
