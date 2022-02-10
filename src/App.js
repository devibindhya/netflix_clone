import React from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import Rowpost from "./components/RowPost/RowPost";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Rowpost />
    </div>
  );
}

export default App;
