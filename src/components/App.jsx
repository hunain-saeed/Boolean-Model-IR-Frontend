import "./App.css";
import React from "react";
import Logo from './Header/Logo'
import SearchBar from './Header/SearchBar'
import Result from './Result/Result'

function App() {
  return <div className="App">
    <Logo />
    {/* <hr /> */}
    <SearchBar />
    {/* <hr /> */}
    {/* <Result /> */}
  </div>;
}

export default App;
