import React from "react";
import Home from "./views/Home";
import "mapbox-gl/dist/mapbox-gl.css";
import "./App.css";
import RoutesProvider from "./configs/RoutesProvider";

function App() {
  return (
    <div className="App">
      <RoutesProvider />
    </div>
  );
}

export default App;
