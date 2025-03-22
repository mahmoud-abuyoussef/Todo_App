import TodoList from "./components/TodoList";
import { createTheme, ThemeProvider } from "@mui/material";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Alexandria"],
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <div className="flex items-center h-screen">
        <TodoList />
      </div>
    </ThemeProvider>
  );
}

export default App;
