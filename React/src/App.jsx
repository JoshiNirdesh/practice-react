import "./App.css";
import Navbar from "./componets/Navbar";
import TextForm from "./componets/TextForm";

function App() {
  return (
    <>
      <Navbar title="TextUtils" about="About " />
      <div className="container">
        <TextForm heading="Enter the text to analyze" />
      </div>
    </>
  );
}

export default App;
