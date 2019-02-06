import React, { Component } from "react";
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";

class App extends Component {
  render() {
    return (
      <div className="main">
        <h1>Jake's Reading List</h1>
        <BookList />
        <AddBook />
      </div>
    );
  }
}

export default App;
