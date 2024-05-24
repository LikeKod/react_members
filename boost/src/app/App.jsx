import { AppEntryPoint } from "../pages";
import { AppThemeProvider } from "./provider/ThemeProvider";

function App() {
  return (
    <AppThemeProvider>
      <AppEntryPoint />
    </AppThemeProvider>
  );
}

export default App;
