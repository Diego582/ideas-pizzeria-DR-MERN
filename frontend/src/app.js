import { Routes, Route } from "react-router-dom";
import { Box, Typography } from "@mui/material";



const App = () => {

  return (
    <Box>
      <Routes>
        <Route
          path="/"
          element={<Typography variant="h1" color="initial">esto es home de pizzeria</Typography>}
        ></Route>
      </Routes>
    </Box>
  );
};

export default App;
