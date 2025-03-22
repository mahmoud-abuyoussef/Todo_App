import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Card, CardContent, Grid2, IconButton, Typography } from "@mui/material";

export default function Todo({ todo, handelCheckClick }) {
  return (
    <>
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

              <IconButton>
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
