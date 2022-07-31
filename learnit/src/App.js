import React from "react";
import Contact from "./Pages/Contact";
import Download from "./Pages/Download";
import Home from "./Pages/Home";
import HowStart from "./Pages/HowStart";
import Register from "./Pages/Register";
import "@progress/kendo-theme-default/dist/all.css";
import RoomScheduler from "./Pages/RoomScheduler";
import './App.css'

function App() {
  return (
    <>
    <div className="App">
     
    <hr className="k-my-8" />
    {/* <Contact/> */}
    <RoomScheduler/>
    </div>
    </>
  );
}

export default App;
