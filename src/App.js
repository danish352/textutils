import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  // alert state
  const [alert, setAlert] = useState(null)
  const showAlert = (message , type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      showAlert(null)
    }, 2000);
  }
  // dark mode states
  const [mode, setmode] = useState("light")
  const [toggleTxt, setToggleTxt] = useState("text-dark")
  const [toggleTxtA, settoggleTxtA] = useState("white")
  const [toggleTxtC, settoggleTxtC] = useState("black")
  const [modeTxt, setmodeTxt] = useState("Dark-")
  const toggleMode = ()=>{
    if(mode === "light"){
      setmode("dark")
      setToggleTxt("text-light")
      document.body.style.backgroundColor = "#0C2C5C"
      settoggleTxtA("darkgrey")
      settoggleTxtC("white")
      setmodeTxt("Light-")
      showAlert("Dark-mode has been activated" , "success")
    } else{
      setmode("light")
      setToggleTxt("text-dark")
      document.body.style.backgroundColor = "white"
      settoggleTxtA("white")
      settoggleTxtC("black")
      setmodeTxt("Dark-")
      showAlert("Light-mode has been activated" , "success")
    }
  }

  return (
    <>
    <Router>
{/* <Navbar/> */}
<Navbar title = "TextUtils" aboutText = "About" mode={mode} toggleMode={toggleMode} toggleTxt={toggleTxt} modeTxt={modeTxt}/>
<Alert alert={alert}/>
    <div className="container my-3">
      <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <TextForm showAlert={showAlert} heading = "Enter Text Below" toggleTxtA={toggleTxtA} toggleTxtC={toggleTxtC}/>
          </Route>
      </Switch>
    </div>
    </Router>
    </>
  );
}

export default App;
