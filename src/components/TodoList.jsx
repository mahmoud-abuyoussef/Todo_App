import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";
import { useContext, useState } from "react";
import { TodosContext } from "../context/todosContext";
import { Button, Card, CardContent, Container, Divider, Grid2, TextField, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";

export default function TodoList() {
  const { todos, setTodos } = useContext(TodosContext);
  const [title, setTitle] = useState("");

  function handelAddClick() {
    const newTodo = { id: uuidv4(), title: title, details: "details", isCompleted: false };
    setTodos([...todos, newTodo]);
    setTitle("");
  }

  return (
    <>
      <Container>
        <Card sx={{ direction: "ltr" }}>
          <CardContent className="text-center">
            <Typography variant="h1" gutterBottom>
              مهامي
            </Typography>
            <br />

            <Divider />

            <ToggleButtonGroup exclusive style={{ marginTop: "20px" }}>
              <ToggleButton>غير منجز</ToggleButton>
              <ToggleButton>منجز</ToggleButton>
              <ToggleButton>الكل</ToggleButton>
            </ToggleButtonGroup>

            <br />
            <br />

            <Grid2 container spacing={2} style={{ padding: "0 20px" }}>
              <Grid2 size={4}>
                <Button onClick={handelAddClick} variant="contained" style={{ width: "100%", height: "100%" }}>
                  إضافة مهمة
                </Button>
              </Grid2>

              <Grid2 size={8}>
                <TextField value={title} onChange={(e) => setTitle(e.target.value)} style={{ width: "100%" }} id="outlined-basic" label="عنوان المهمة" variant="outlined" />
              </Grid2>
            </Grid2>

            {todos.map((todo) => {
              return <Todo key={todo.id} todo={todo} />;
            })}
          </CardContent>
        </Card>
      </Container>
    </>
  );
}
