import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";
import { useContext, useState } from "react";
import { TodosContext } from "../context/todosContext";
import { Button, Card, CardContent, Container, Divider, Grid2, TextField, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";

export default function TodoList() {
  const { todos, setTodos } = useContext(TodosContext);
  const [todoInputs, setTodoInputs] = useState({ title: "", details: "" });

  function handelAddClick() {
    const newTodo = { id: uuidv4(), title: todoInputs.title, details: todoInputs.details, isCompleted: false };

    const updatedTodos = [...todos, newTodo];

    setTodos(updatedTodos);

    localStorage.setItem("todos", JSON.stringify(updatedTodos));

    setTodoInputs({ title: "", details: "" });
  }
  let todosRenderd = todos;

  const completedTodos = todos.filter((todo) => todo.isCompleted);

  const uncompletedTodos = todos.filter((todo) => !todo.isCompleted);

  const [displayTodosType, setDisplayTodosType] = useState("all");
  function changeDisplayTodosType(e) {
    setDisplayTodosType(e.target.value);
  }

  switch (displayTodosType) {
    case "completed":
      todosRenderd = completedTodos;
      break;
    case "non-completed":
      todosRenderd = uncompletedTodos;
      break;
    default:
      todosRenderd = todos;
  }

  const todoJSX = todosRenderd.map((todo) => <Todo key={todo.id} todo={todo} />);

  return (
    <>
      <Container>
        <Card sx={{ direction: "ltr" }}>
          <CardContent className="text-center">
            <Typography color="primary" variant="h1" gutterBottom>
              قائمة المهام
            </Typography>
            <br />

            <Divider />

            <ToggleButtonGroup color="primary" value={displayTodosType} onChange={changeDisplayTodosType} exclusive style={{ marginTop: "20px" }}>
              <ToggleButton value={"non-completed"}>غير منجز</ToggleButton>
              <ToggleButton value={"completed"}>منجز</ToggleButton>
              <ToggleButton value={"all"}>الكل</ToggleButton>
            </ToggleButtonGroup>

            <br />
            <br />

            <Grid2 container spacing={2} style={{ padding: "20px", margin: "20px", backgroundColor: "#f5f5f5", borderRadius: "10px" }}>
              <Grid2 size={4}>
                <Button disabled={todoInputs.title.length === 0} onClick={handelAddClick} variant="contained" style={{ width: "100%", height: "100%" }}>
                  إضافة مهمة
                </Button>
              </Grid2>

              <Grid2 size={4}>
                <TextField
                  value={todoInputs.details}
                  onChange={(e) => setTodoInputs({ ...todoInputs, details: e.target.value })}
                  style={{ width: "100%" }}
                  id="outlined-basic"
                  label="تفاصيل المهمة"
                  variant="outlined"
                />
              </Grid2>

              <Grid2 size={4}>
                <TextField
                  value={todoInputs.title}
                  onChange={(e) => setTodoInputs({ ...todoInputs, title: e.target.value })}
                  style={{ width: "100%" }}
                  id="outlined-basic"
                  label="عنوان المهمة"
                  variant="outlined"
                />
              </Grid2>
            </Grid2>

            <div style={{ maxHeight: "500px", overflow: "auto" }}>{todoJSX}</div>
          </CardContent>
        </Card>
      </Container>
    </>
  );
}
