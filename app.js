const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const dbConnect = require("./config/mongo")

app.use(cors());
app.use(express.json());
app.use(express.static("storage"))
const port = process.env.PORT;

///invoco a las rutas :D
app.use("/api", require("./routes"));



app.listen(port,() =>{
    console.log("http://localhost:"+port)
})

dbConnect();