// routes
import Router from "./routes/Router";
// theme
import ThemeProvider from "./theme";
// components
import ThemeSettings from "./components/settings";

function App() {
  return (
    <ThemeProvider>
      <ThemeSettings>
        <Router />
      </ThemeSettings>
    </ThemeProvider>
  );
}

export default App;
