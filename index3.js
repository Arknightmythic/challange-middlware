import express from "express";

const app = express();
const port = 3000;

function logger(req, res, next){
  console.log("request method: ", req.method);
  console.log("request method: ", req.url);
  next();
}//make logger function for custom middleware

app.use(logger)

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
