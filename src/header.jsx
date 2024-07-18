import React from "react";
import logo from "../src/assets/react.svg"

 export default function Header(){
    return(
    <div>
      <nav>
        <div className="navBar">
        <img src={logo} alt=""/>
        <h1 className="h1Raeact">ReactFacts</h1>
        <h2>React Course - Project 1</h2>
        </div>
      </nav>
   </div>
    )
 }