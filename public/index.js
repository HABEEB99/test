require("file-loader?name=[name].[ext]!./index");
import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import "./App.scss";
var appElement = document.getElementById("app");
ReactDom.render( /*#__PURE__*/React.createElement(App, null), appElement);