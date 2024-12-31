import "./App.css";
import LandingPage from "./pages/landing_page/LandingPage";
import Login from "./pages/onboarding/Login";
import Register from "./pages/onboarding/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./constants/theme";
import Onboarding from "./pages/onboarding/Onboarding";
import EmailVerificationSuccessful from "./pages/onboarding/EmailVerificationSuccessful";
import Reset from "./pages/onboarding/Reset";
import ResetPassword from "./pages/onboarding/ResetPassword";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/success" element={<EmailVerificationSuccessful />} />
            <Route path="/reset" element={<Reset />} />
            <Route path="/resetPassword" element={<ResetPassword />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
