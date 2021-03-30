import "./App.css";
import React from "react";
import bmr from "../api/index";
// import queryType from "../api/queryType";

import Logo from "./Header/Logo";
import SearchBar from "./Header/SearchBar";
import Result from "./Result/Result";

class App extends React.Component {
  state = { result: [], error: "", time: 0 };

  onSearchSubmit = async (query) => {
    this.setState({ error: "" });
    if (query) {
      var t0 = performance.now();
      const res = await bmr.get(`/booleanquery/${query}`);
      var t1 = (performance.now() - t0)/1000;
      this.setState({time: t1.toFixed(3)})
      console.log(`Time: ${t1/1000} seconds`);
      if (res.data) {
        this.setState({ result: res["data"]["result"] });
        this.setState({ error: res["data"]["error"] });
      }
    } else {
      this.setState({ result: [] });
      this.setState({ error: "" });
    }
  };

  render() {
    return (
      <div className="App">
        <Logo />
        {/* <hr /> */}
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        {/* <hr /> */}
        <Result result={this.state.result} error={this.state.error} time={this.state.time} />
      </div>
    );
  }
}

export default App;
