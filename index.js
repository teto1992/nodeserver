const express = require('express');


const app = express();

const port = 3070;

app.get('/', (req, res) => {
  res.send("TODO: Write your first and last name here - Write your student number here: On your way to pass the lab test... focus on submitting the right files on time!"); // e.g. Mario Rossi - 123456
});


app.listen(port, (err) => {
  console.log(`running server on from port:::::::${port}`);
});