import "./App.css";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Register from "./pages/onboarding/Register";
import Login from "./pages/onboarding/Login";

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Login />
    </div>
  );
}

export default App;
