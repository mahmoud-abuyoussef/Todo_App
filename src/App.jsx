import { useState } from "react";
import TodoList from "./components/TodoList";
import { TodosContext } from "./context/todosContext";
import { createTheme, ThemeProvider } from "@mui/material";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Alexandria"],
    },
    palette: {
      primary: {
        main: "#1976d2",
      },
    },
  });

  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || []);

  return (
    <ThemeProvider theme={theme}>
      <TodosContext.Provider value={{ todos, setTodos }}>
        <TodoList />
      </TodosContext.Provider>
    </ThemeProvider>
  );
}

export default App;
