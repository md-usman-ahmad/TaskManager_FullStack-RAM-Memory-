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

let taskList = [
  {
    id: 1,
    title: "Running",
    description: "Running is good for Health",
    createdAt: new Date().toISOString().slice(0, 19).replace("T", " "),
  },
];

app.get("/taskList", async function (request, response) {
  try {
    response.send(taskList);
  } catch (error) {
    console.log("error(backend) = ", error);
  }
});

app.listen(4000, function () {
  console.log("Server is running on port 4000");
});
