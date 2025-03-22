import Todo from "./Todo";
import { Card, CardContent, Container, Divider, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";

export default function TodoList() {
  return (
    <>
      <Container maxWidth="md">
        <Card sx={{ minWidth: 275, direction: "ltr" }}>
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

            <Todo />
          </CardContent>
        </Card>
      </Container>
    </>
  );
}
