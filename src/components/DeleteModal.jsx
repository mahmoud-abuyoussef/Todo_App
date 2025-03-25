import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";

export default function DeleteModal({ open, handleClose, handleDeleteClick, todo }) {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>حذف مهمة: {todo?.title}</DialogTitle>
      <DialogContent>
        <DialogContentText>هل أنت متأكد من حذف المهمة</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>إلغاء</Button>
        <Button onClick={handleDeleteClick} color="error">
          حذف
        </Button>
      </DialogActions>
    </Dialog>
  );
}
