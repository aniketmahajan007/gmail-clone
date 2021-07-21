import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import LeftBar from "./components/LeftBar/LeftBar";

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="main_layout">
        <LeftBar />
      </div>
    </div>
  );
}

export default App;
