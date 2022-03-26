// import logo from "./logo.svg";
import React from "react";
// import { Navigate, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Shelf from "./components/shelf";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
                {/* <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p> */}
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    YONIN
                </a>
                <Shelf />
            </header>
        </div>
    );
}

export default App;
