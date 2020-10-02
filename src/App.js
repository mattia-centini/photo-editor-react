import React from "react";
import "./App.css";
import Slider from "./components/Slider";
import SidebarItem from "./components/SidebarItem";

function App() {
  return (
    <div className="container">
      <div className="main-image"></div>
      <div className="sidebar-container">
        <SidebarItem />
        <SidebarItem />
      </div>
      <Slider />
    </div>
  );
}

export default App;
