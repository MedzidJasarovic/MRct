import React from "react";
import ReactoDom from "react-dom";
import Book from "./komponente/book";
// import style from "./index.module.css";
import "./index.module.css";

function BookList() {
  // const vracaj = () => {
  //   const el = [];
  //   for (let i = 0; i < 10; i++) {
  //     el.push(<Book />);
  //   }
  //   return el;
  // };
  // return <div>{vracaj()}</div>;

  return (
    <section className="bookList">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

ReactoDom.render(<BookList />, document.getElementById("root"));
