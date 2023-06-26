import express from "express";
import cors from "cors";
import { connect, Schema, model } from "mongoose";

const url = "mongodb://localhost:27017/patches";
const app = express();
const port = 3000;
// Use cors middleware with default options
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/patches", async (req, res) => {
  try {
    const patches = await Patches.find({});
    console.log(patches);
    res.json(patches);
  } catch (err) {
    res.status(500).json({ error: "Error fetching users from the collection" });
  }
});

connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const patchSchema = new Schema({
  // Define your user schema here
});

const Patches = model("Patches", patchSchema, "patches");

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
