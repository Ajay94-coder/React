import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [modeText, setModeText] = useState('Enable Dark Mode');
  const [text, setText] = useState('text-dark');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);  // Correctly calling setAlert here
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setModeText('Enable Light Mode');
      setText('text-white');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode('light');
      setModeText('Enable Dark Mode');
      setText('text-dark');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      {/* <Router>
        <Navbar title="TextUtils" About="About-text" mode={mode} toggleMode={toggleMode} state={modeText} text={text} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/TextForm" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} />
          </Routes>
        </div>
      </Router> */}
      <Navbar title="TextUtils" About="About-text" mode={mode} toggleMode={toggleMode} state={modeText} text={text} />
      <Alert alert={alert} />
      <div className="container my-3">
        <About/>
        <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
      </div>
    </>
  );
}

export default App;
