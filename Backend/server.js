const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const cors = require("cors");

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
  })
);

let taskList = [];

app.get("/", async function (request, response) {
  try {
    console.log("Electronics request originalURL =", request.originalUrl);
    console.log("Electronics request method =", request.method);
    response.send(taskList);
  } catch (error) {
    console.log("GET error(backend) = ", error);
  }
});

app.post("/", async function (request, response) {
  try {
    console.log("Electronics request originalURL =", request.originalUrl);
    console.log("Electronics request method =", request.method);
    console.log("Electronics request.body =", request.body);
    const newTask = {
      id: taskList.length + 1,
      title: request.body.title,
      description: request.body.description,
      createdAt: new Date().toISOString().slice(0, 19).replace("T", " "),
    };
    taskList.push(newTask);

    response.send("Task Added");
  } catch (error) {
    console.log("POST error(backend) = ", error);
  }
});

app.delete("/", async function (request, response) {
  try {
    console.log("Electronics request originalURL =", request.originalUrl);
    console.log("Electronics request method =", request.method);
    console.log("Electronics request.body =", request.body);
    taskList = taskList.filter((item) => {
      if (item.id !== request.body.id) return true;
    });
    response.send("Item Deleted")
  } catch (error) {
    console.log("DELETE error(backend) = ", error);
  }
});

app.patch("/",async function(request,response){
  try {
    console.log("Electronics request originalURL =", request.originalUrl);
    console.log("Electronics request method =", request.method);
    console.log("Electronics request.body =", request.body);
    taskList = taskList.map( (item)=>{
      if(item.id === request.body.id){
        item.title = request.body.title;
        item.description = request.body.description;
        item.updatedAt = new Date().toISOString().slice(0, 19).replace("T", " ");
      }
      return item;
    })
    response.send("Item Updated");
  } catch (error) {
    console.log("PATCH error(backend) = ", error);
  }
})

app.listen(4000, function () {
  console.log("Server is running on port 4000");
});
