import "./App.css";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Register from "./pages/onboarding/Register";

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Register />
    </div>
  );
}

export default App;
