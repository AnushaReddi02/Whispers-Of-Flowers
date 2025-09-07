const express = require('express');
const path = require('path');
const fs = require('fs');
// fs stands for File System.
// Node.js has this built-in module that lets you read, write, update, or delete files on your computer from your server code.
// require("fs") imports this module so you can use it in your script.

const app = express();
app.use(express.static(path.join(__dirname,"public")));
// app.use(express.static(path.join(__dirname,"/public/js")));

app.set("view engine","ejs");

const port = 3000;

app.get("/",(req,res)=>{
  res.render("index");
});

app.get("/flower-psychology",(req,res)=>{
  const flowers = require("./data/flowers.json"); //loading the json file
  res.render("Flower Psychology",{flowers}); // using {flowers} we are passing json data to ejs
});

app.get("/about",(req,res)=>{
    res.render("About")
});

app.get("/contact",(req,res)=>{
  res.render("contact");
});

app.listen(port,()=>{
  console.log(`Request is being listened at port ${port}`);
});