import React, { Component } from "react";
import "./App.css";
import WeatherTiles from "./containers/weatherTiles-container";

class App extends Component {
  render() {
    return (
      <div className="App">
        <WeatherTiles />
      </div>
    );
  }
}

export default App;
