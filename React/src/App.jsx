import { useState } from "react";
import "./App.css";
import About from "./componets/About";
import Navbar from "./componets/Navbar";
import TextForm from "./componets/TextForm";
import Alert from "./componets/Alert";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      showAlert("Dark Mode is enable", "primary");
    } else if (mode === "dark") {
      setMode("light");
      showAlert("Light Mode is enable", "danger");
    }
  };
  const [alert, setAlert] = useState("");

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
  };
  return (
    <>
      <Navbar
        title="TextUtils"
        about="About"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container">
        <TextForm heading="Enter the text to analyze" />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
