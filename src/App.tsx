import React from "react";
import "./App.css";
import { JobCard } from "./Components";

const snippet =
  "As a Frontend Engineer at Netflix, you’ll help solve unique, large-scale, highly-complex technical problems and will build delightful user experiences and scalable frontend systems to make Dover’s recruiting platform accessible to everyone. ";

function App() {
  return (
    <div className="App flex">
      <JobCard
        saved
        logo="https://images.unsplash.com/photo-1638697027918-3ff96e53818a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
        role="Front-end Developer"
        tags={["junior", "React", "EMEA"]}
        snippet={snippet}
        href="https://www.google.com"
      />
    </div>
  );
}

export default App;
