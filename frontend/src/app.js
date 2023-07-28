import { Routes, Route } from "react-router-dom";
import { Box} from "@mui/material";
import ListadoComidas from "./views/listcomidas";



const App = () => {

  return (
    <Box>
      <Routes>
        <Route
          path="/"
          element={<ListadoComidas />}
        ></Route>
      </Routes>
    </Box>
  );
};

export default App;
