import express from "express";
import mongoose from "mongoose";
import Data from "./data.js";
import Cors from "cors";
import Videos from "./dbModel.js";
const connection_url =
  "mongodb+srv://tiktok:6kmGhVRJxPuHSPV6@tiktok-api.vejf99x.mongodb.net/tiktok-api?retryWrites=true&w=majority";
// app config
const app = express();

const port = process.env.PORT || 8001;
// middleware
app.use(express.json());
app.use(Cors());
app.use((req, res, next) => {
  res.setHeader("Acess-Control-Allow-Origin", "*");
  res.setHeader("Acess-Control-Allow-Headers", "*");
  next();
});
// db config
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// api endpoints
app.get("/", (req, res) => res.status(200).send("hello world"));

app.get("/v1/posts", (req, res) => res.status(200).send(Data));

app.get("/v2/posts", (req, res) => {
  Videos.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post("/v2/posts", (req, res) => {
  const dbVideos = req.body;
  Videos.create(dbVideos, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.listen(port, () => console.log(`listing on localhost:${port}`));
