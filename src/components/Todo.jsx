import { useContext, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { TodosContext } from "../context/todosContext";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Button, Card, CardContent, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid2, IconButton, Typography } from "@mui/material";

export default function Todo({ todo }) {
  const { todos, setTodos } = useContext(TodosContext);

  function handelCheckClick(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.isCompleted = !todo.isCompleted;
        }
        return todo;
      })
    );
  }
  const [open, setOpen] = useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  function handelDelete() {
    setTodos(todos.filter((todo) => todo.id !== todo.id));
    setOpen(false);
  }

  return (
    <>
      <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">حذف مهمة: {todo.title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">هل انت متأكد من حذف المهمة؛ لا يمكن التراجع عن هذا القرار</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>الغاء</Button>
          <Button onClick={handelDelete} autoFocus style={{ color: "red" }}>
            حذف
          </Button>
        </DialogActions>
      </Dialog>

      <Card className="!bg-[#0075ff] !m-5">
        <CardContent className="text-white">
          <Grid2 container spacing={2}>
            <Grid2 size={4}>
              <IconButton>
                <CheckCircleIcon onClick={() => handelCheckClick(todo.id)} className={`${todo.isCompleted ? "text-green-400" : "text-white"}`} />
              </IconButton>

              <IconButton>
                <EditIcon className="text-white" />
              </IconButton>

              <IconButton onClick={handleClickOpen}>
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
