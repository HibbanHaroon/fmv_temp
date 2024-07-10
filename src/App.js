import "./App.css";
import LandingPage from "./pages/landing_page/LandingPage";
import Login from "./pages/onboarding/Login";
import Register from "./pages/onboarding/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./constants/theme";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
