import React from "react";
import ReactoDom from "react-dom";
import Header from "./components/header/header";
import "./index.css";

const App = () => {
  return (
    <div>
      <Header />
    </div>
  );
};

ReactoDom.render(<App />, document.getElementById("root"));
