import { Card, CardContent, Container, Divider, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import Todo from "./Todo";

export default function TodoList() {
  return (
    <>
      <Container maxWidth="md">
        <Card sx={{ minWidth: 275, direction: "ltr" }}>
          <CardContent className="text-center">
            <Typography variant="h1" gutterBottom>
              مهامي
            </Typography>

            <Divider />

            <ToggleButtonGroup exclusive style={{ marginTop: "20px" }}>
              <ToggleButton>غير منجز</ToggleButton>
              <ToggleButton>منجز</ToggleButton>
              <ToggleButton>الكل</ToggleButton>
            </ToggleButtonGroup>

            <Todo />
            <Todo />
            <Todo />
            <Todo />
            <Todo />
          </CardContent>
        </Card>
      </Container>
    </>
  );
}
