require("file-loader?name=[name].[ext]!./index");
import React from "react";
import ReactDom from "react-dom";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./App.scss";

const appElement = document.getElementById("app");
const root = createRoot(appElement);
root.render(<App tab="home" />);
