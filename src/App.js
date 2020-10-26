import React, { Component } from "react";
import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./components/BurgerBuilder/BurgerBuilder";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout></Layout>
        <BurgerBuilder />
      </div>
    );
  }
}

export default App;
