import React from "react";
import "./App.css";
import { UserCard } from "./Components";

function App() {
  return (
    <div className="App flex">
      <UserCard
        profilePic="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
        username="Will J."
        role="Front-end Developer"
      />
    </div>
  );
}

export default App;
