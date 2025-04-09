import { useState } from "react";
import TodoList from "./components/TodoList";
import { TodosContext } from "./context/todosContext";
import { ToastContext } from "./context/ToastContext";
import SimpleSnackbar from "./components/SimpleSnackbar";
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

  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  function handleHideToast(message) {
    setOpen(true);
    setMessage(message);
    setTimeout(() => {
      setOpen(false);
    }, 2000);
  }

  return (
    <ThemeProvider theme={theme}>
      <TodosContext.Provider value={{ todos, setTodos }}>
        <SimpleSnackbar open={open} message={message} />
        <ToastContext.Provider value={{ handleHideToast }}>
          <TodoList />
        </ToastContext.Provider>
      </TodosContext.Provider>
    </ThemeProvider>
  );
}

export default App;
