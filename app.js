const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("uploads"));

app.use(express.static("recursos"));

//------------Aqui van los links y vistas------------//
//Abrir index cuando se ejecuta el servidor
//Esta parte del codigo siempre debe quedar hasta arriba :)
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

//Regresar al index estando en cualquier opcion
app.get("/home", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.listen(process.env.PORT || 3000, function () {
  console.log("Server is running at port 3000");
});
