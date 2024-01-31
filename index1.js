import express from "express";
import bodyParser from "body-parser";// middleware for pre-processing data
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));// to get url file and send a file from the url

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");//
});

app.post("/submit", (req, res)=> {
  var value=req.body;
  console.log(value.street)
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
