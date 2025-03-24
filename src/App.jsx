import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoList from "./components/TodoList";
import { TodosContext } from "./context/todosContext";
import { createTheme, ThemeProvider } from "@mui/material";
function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Alexandria"],
    },
  });

  const initialTodos = [
    { id: uuidv4(), title: "قراءة كتاب", details: "details", isCompleted: false },
    { id: uuidv4(), title: "قراءة كتاب", details: "details", isCompleted: false },
    { id: uuidv4(), title: "قراءة كتاب", details: "details", isCompleted: false },
    { id: uuidv4(), title: "قراءة كتاب", details: "details", isCompleted: false },
    { id: uuidv4(), title: "قراءة كتاب", details: "details", isCompleted: false },
    { id: uuidv4(), title: "قراءة كتاب", details: "details", isCompleted: false },
    { id: uuidv4(), title: "قراءة كتاب", details: "details", isCompleted: false },
    { id: uuidv4(), title: "قراءة كتاب", details: "details", isCompleted: false },
  ];

  const [todos, setTodos] = useState(initialTodos);

  return (
    <ThemeProvider theme={theme}>
      <TodosContext.Provider value={{ todos, setTodos }}>
        <TodoList />
      </TodosContext.Provider>
    </ThemeProvider>
  );
}

export default App;
