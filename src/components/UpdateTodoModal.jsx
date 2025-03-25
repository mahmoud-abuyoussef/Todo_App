import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material";

export default function UpdateTodoModal({ openEdit, handleEditClose, todo, updatedTodo, setUpdatedTodo, handelEditConfirmClick }) {
  return (
    <Dialog
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
        <DialogContentText>هل أنت متأكد من تعديل المهمة: {todo?.title}</DialogContentText>

        <TextField
          value={updatedTodo?.title}
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
          value={updatedTodo?.details}
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
    </Dialog>
  );
}
