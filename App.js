import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1",{id:"heading"},"Hello World from React!");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading); 

//const parent = React.createElement("div",{id:"parent"},React.createElement("h1",{},"this is h1"));

//root.render(parent);