import { App } from "./App.jsx"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import "./index.css"

const container = document.getElementById("root")
const root = ReactDOM.createRoot(container)
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)


