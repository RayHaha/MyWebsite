import React from "react";
import Box from "@mui/material/Box";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import NavBar from "./components/NavBar";
import ScrollTop from "./components/ScrollTop";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Home from "./pages/Home/Home";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const App = (props) => {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  return (
    <>
      <CssBaseline />
      <Toolbar id="back-to-top-anchor" />
      <Box
        sx={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "background.default",
          color: "text.primary",
          borderRadius: 1,
        }}
      >
        <NavBar
          mode={theme.palette.mode}
          themeOnClick={colorMode.toggleColorMode}
        />
        <Home mode={theme.palette.mode} />
        <ScrollTop {...props}>
          <Fab size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </Box>
    </>
  );
};

export default function ToggleColorMode() {
  const [mode, setMode] = React.useState("dark");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
