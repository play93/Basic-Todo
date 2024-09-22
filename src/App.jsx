import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useThemeStore } from "./store/useThemeStore";
import { useEffect } from "react";
import ThemeSwitchButton from "./components/ThemeSwitchButton";

const queryClient = new QueryClient();

const App = () => {
  const { darkMode } = useThemeStore();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    // documentElement => html태그
    // html 태그에 class리스트를 가져와서 class를 넣었다 뺐다 할것이다
    // dark라는 클래스를 true라면 넣어주고 false라면 뺀다
  }, [darkMode]);

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Router />
        <ThemeSwitchButton />
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;
