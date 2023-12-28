 import React from "react";
 import  ReactDOM  from "react-dom/client";
 const heading = React.createElement("h1",{
    id:"heading",xyz:"abc"},
    "hello from react,working on it ");
    console.log(heading)
   const  Root = ReactDOM.createRoot(document.getElementById("root"))
  //const Root = ReactDOM.createElement(document.getElementById('root'))
 Root.render(heading);

