const express = require("express");
const bodyParser = require("body-parser");
const helmet = require('helmet');
const app = express();

app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'"],
    scriptSrc: ["'self'", 'https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.11/typed.min.js',],
    scriptSrc: ["'self'", 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js',],
    scriptSrc: ["'self'", 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js',],
    scriptSrc: ["'self'", 'https://unpkg.com/split-type@0.3.4/umd/index.min.js',],
  },
}));

app.use(bodyParser.urlencoded({ extended: true }));

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
