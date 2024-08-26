import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Component/Navbar";
import TextForm from "./Component/TextForm";
import Alert from "./Component/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  // Set default background when component mounts
  useEffect(() => {
    document.body.style.backgroundImage = 'url("wallpaperflare.com_wallpaper (4).jpg")';
    document.body.style.backgroundSize = 'cover'; 
    document.body.style.backgroundPosition = 'Center'; 
  }, []); // Empty dependency array means this runs once after the initial render

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundImage = 'url("Design 1.jpeg")';
      document.body.style.backgroundSize = 'cover';
      document.body.style.backgroundPosition = 'Center';
      showAlert("Dark Mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundImage = 'url("wallpaperflare.com_wallpaper (4).jpg")'; 
      showAlert("Light Mode has been enabled", "success");
    }
  };

  return (
    <>
      <Navbar title="TextUtils2" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
