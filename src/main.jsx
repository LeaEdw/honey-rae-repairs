import React from "react"
import ReactDOM from "react-dom/client"
import { App } from "./App.jsx"
import "./index.css"

const container = document.getElementById("root")
const root = ReactDOM.createRoot(container)
root.render(<App />)

// import ReactDOM from 'react-dom'; // Note: different import path

// const container = document.getElementById('root');
// ReactDOM.render(<App />, container);
