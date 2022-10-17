require("file-loader?name=[name].[ext]!./index");
import React from "react";
import ReactDom from "react-dom";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./App.scss";
var appElement = document.getElementById("app");
var root = createRoot(appElement);
root.render( /*#__PURE__*/React.createElement(App, {
  tab: "home"
}));

// createRoot(<App />, appElement);
// ReactDom.render(<App />, appElement);

// // Before
// import { render } from 'react-dom';
// const container = document.getElementById('app');
// render(<App tab="home" />, container);

// // After
// import { createRoot } from 'react-dom/client';
// const container = document.getElementById('app');
// const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(<App tab="home" />);