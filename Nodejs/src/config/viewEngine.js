const express = require("express")
const path = require("path")

let configViewEngine = (app) => {
    //this is arrow function
    app.use(express.static(path.join("./src", "public")));
    app.set("view engine", "ejs");
    app.set("views", path.join('./src', "views"));

}

module.exports = configViewEngine;