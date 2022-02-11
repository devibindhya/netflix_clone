import React from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import Rowpost from "./components/RowPost/RowPost";
import { actions, originals } from "./urls";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Rowpost url={originals} title="Netflix Originals" />
      <Rowpost url={actions} title="Action" isSmall />
    </div>
  );
}

export default App;
