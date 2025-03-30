import { Alert, Snackbar } from "@mui/material";

export default function SimpleSnackbar({ open, message }) {
  return (
    <div>
      <Snackbar open={open}>
        <Alert severity="success">{message}</Alert>
      </Snackbar>
    </div>
  );
}
