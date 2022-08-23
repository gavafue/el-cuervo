import React from "react";
import { createTheme } from "@mui/material/styles";
import { grey, blue } from "@mui/material/colors";

const AppTheme = createTheme({
  palette: {
    primary: {
      main: grey[900],
    },
    secondary: {
      main: blue[900],
    },
  },
});

export default AppTheme;
