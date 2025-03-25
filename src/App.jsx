import { useState } from "react";
import TodoList from "./components/TodoList";
import SimpleSnackbar from "./components/Snakbar";
import { TodosContext } from "./context/todosContext";
import { createTheme, ThemeProvider } from "@mui/material";
import { ToastContext } from "./context/ToastContext";

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

  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  function handleHideToast(message) {
    setOpen(true);
    setMessage(message);
    setTimeout(() => {
      setOpen(false);
    }, 6000);
  }

  return (
    <ThemeProvider theme={theme}>
      <ToastContext.Provider value={{ handleHideToast }}>
        <SimpleSnackbar open={open} message={message} />
        <TodosContext.Provider value={{ todos, setTodos }}>
          <TodoList />
        </TodosContext.Provider>
      </ToastContext.Provider>
    </ThemeProvider>
  );
}

export default App;
