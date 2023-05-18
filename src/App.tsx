import { PaletteMode, ThemeProvider } from "@mui/material";
import { ColorModeContext, useColorMode, useTheme } from "./theme";
import { CssBaseline } from "@mui/material";
import Topbar from "./scenes/global/Topbar";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState<PaletteMode>("dark");

  const theme = useTheme(mode);
  const colorMode = useColorMode(setMode);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
            <Topbar />{" "}
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
