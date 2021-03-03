import './App.css';
import './MyFramework.css'
import { useState, useEffect } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import 'materialize-css/dist/css/materialize.min.css';
import HeaderBar from './components/HeaderBar'

import Home from './views/Home'
import LandingPage from './views/LandingPage'
import ProjectPage from './views/ProjectPage'
import ContactMe from './views/ContactMe'
import AboutMe from './views/AboutMe'

function App() {
  const [colorMode, setColorMode] = useState("dark")

  useEffect(()=>{
    let currentColor = localStorage.getItem("colorMode")
    let r = document.querySelector(":root")
    if(currentColor === "light"){
      r.style.setProperty("--color1", "#d8f3dc");
      r.style.setProperty("--color2", "#b7e4c7");
      r.style.setProperty("--color3", "#40916c");
      r.style.setProperty("--color4", "#74c69d");
      r.style.setProperty("--color5", "#52b788");
    } else if(currentColor === "dark"){
      r.style.setProperty("--color1", "#264653");
      r.style.setProperty("--color2", "#2a9d8f");
      r.style.setProperty("--color3", "#e9c46a");
      r.style.setProperty("--color4", "#f4a261");
      r.style.setProperty("--color5", "#e76f51");
    }
  },[colorMode])

  const switchColors = () => {
    if(colorMode === "light"){
      localStorage.setItem("colorMode", "dark")
      setColorMode("dark")
    } else {
      localStorage.setItem("colorMode", "light")
      setColorMode("light")
    }
  }

  const changePage = (e) => {
    console.log(e);
  }



  return (
    <div className="App my-color-1">
      <BrowserRouter>
        <HeaderBar onReturn={switchColors}/>
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/home" component={Home} />
        <Route exact path="/projectPage" component={ProjectPage} />
        <Route exact path="/contact_me" component={ContactMe} />
        <Route exact path="/about_me" component={AboutMe} />
      </BrowserRouter>
    </div>
  );
}

export default App;
