const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/uploads"));

app.use(express.static(__dirname + "/public"));

//------------Aqui van los links y vistas------------//
//Abrir index cuando se ejecuta el servidor
//Esta parte del codigo siempre debe quedar hasta arriba :)
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

//Regresar al index estando en cualquier opcion
app.get("/index.html", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

//Abrir la vista about-me
app.get("/About-me/index.html", function(req, res) {
  res.sendFile(__dirname + "/About-me/index.html")
})

//Abrir index en servidor o en localhots
app.listen(process.env.PORT || 3000, function () {
  console.log("Server is running at port 3000");
});
