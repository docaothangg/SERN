const express = require("express")
const bodyParser = require("body-parser");
//query param 
const viewEngine = require("./config/viewEngine")
const initWebRouter = require("./route/web")
const connection = require('./config/connectDB')

require("dotenv").config();

let app = express();

//config app;


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

viewEngine(app);
initWebRouter(app);
connection();

let port = process.env.PORT;
let local
app.listen(port, () => {
    //call back 
    console.log("Backend Nodejs is running on the port " + port)
})