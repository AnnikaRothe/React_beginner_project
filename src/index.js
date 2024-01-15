import React from "react"
import ReactDom from "react-dom/client"
import "bootstrap/dist/css/bootstrap.min.css"
import App from "./app";
import './index.css';

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<App/>);