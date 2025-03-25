import { useContext } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { TodosContext } from "../context/todosContext";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Card, CardContent, Grid2, IconButton, Typography } from "@mui/material";

export default function Todo({ todo, handleOpenDeleteClick }) {
  const { todos, setTodos } = useContext(TodosContext);

  function handelCheckClick(id) {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    });

    setTodos(updatedTodos);

    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  }

  // const [openEdit, setOpenEdit] = useState(false);
  // const [updatedTodo, setUpdatedTodo] = useState({ title: todo.title, details: todo.details });

  // function handelEditClick() {
  //   setOpenEdit(true);
  // }

  // function handleEditClose() {
  //   setOpenEdit(false);
  // }

  // function handelEditConfirmClick() {
  //   const updatedTodos = todos.map((t) => {
  //     if (t.id === todo.id) {
  //       return { ...t, title: updatedTodo.title, details: updatedTodo.details };
  //     }
  //     return t;
  //   });
  //   setTodos(updatedTodos);
  //   localStorage.setItem("todos", JSON.stringify(updatedTodos));
  // }

  return (
    <>
      {/* <Dialog
        open={openEdit}
        onClose={handleEditClose}
        slotProps={{
          paper: {
            component: "form",
            onSubmit: (event) => {
              event.preventDefault();
              handleEditClose();
            },
          },
        }}
      >
        <DialogTitle>تعديل مهمة</DialogTitle>
        <DialogContent>
          <DialogContentText>هل أنت متأكد من تعديل المهمة: {todo.title}</DialogContentText>

          <TextField
            value={updatedTodo.title}
            onChange={(e) => setUpdatedTodo({ ...updatedTodo, title: e.target.value })}
            autoFocus
            required
            margin="dense"
            id="title"
            name="title"
            label="عنوان المهمة"
            type="text"
            fullWidth
            variant="standard"
          />

          <TextField
            value={updatedTodo.details}
            onChange={(e) => setUpdatedTodo({ ...updatedTodo, details: e.target.value })}
            required
            margin="dense"
            id="description"
            name="description"
            label="تفاصيل المهمة"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleEditClose}>الغاء</Button>
          <Button type="submit" onClick={handelEditConfirmClick}>
            تعديل
          </Button>
        </DialogActions>
      </Dialog> */}

      <Card className="!bg-[#0075ff] !m-5">
        <CardContent className="text-white">
          <Grid2 container spacing={2}>
            <Grid2 size={4}>
              <IconButton>
                <CheckCircleIcon onClick={() => handelCheckClick(todo.id)} className={`${todo.isCompleted ? "text-green-400" : "text-white"}`} />
              </IconButton>

              {/* <IconButton onClick={handelEditClick}>
                <EditIcon className="text-white" />
              </IconButton> */}

              <IconButton onClick={() => handleOpenDeleteClick(todo)}>
                <DeleteIcon className="text-red-500" />
              </IconButton>
            </Grid2>

            <Grid2 size={8} className="!flex !flex-col !items-end">
              <Typography className="!font-bold">{todo.title}</Typography>

              <Typography className="!font-bold">{todo.details}</Typography>
            </Grid2>
          </Grid2>
        </CardContent>
      </Card>
    </>
  );
}
