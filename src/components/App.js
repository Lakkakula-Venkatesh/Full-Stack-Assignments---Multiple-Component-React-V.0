import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  render() {
    return (
      <>
      <h2 data-ns-test="project-name">{'Project Name'}</h2>
      <p data-ns-test="project-description">{'Project Description'}</p>
      </>
    );
  }
}

export default App;
