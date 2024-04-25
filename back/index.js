import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import characters from "./models/characters.js";
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

mongoose
  .connect(
    "mongodb+srv://sprowalc:3bBqQ1Evt3UKlGtt@barles.wx95pbz.mongodb.net/CharacterSheet?retryWrites=true&w=majority&appName=Barles"
  )
  .then(() => {
    console.log("Connected to chactersheet backend");
    app.listen(port, () => {
      console.log(`Server is listening on port: ${port}.`);
    });
  })
  .catch(() => {
    console.log("There was a problem connecting to the backend");
  });

app.get("/api/characters", async (req, res) => {
  try {
    const characterData = await characters.find({});
    res.status(200).json(characterData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/api/characters", async (req, res) => {
  try {
    const newCharacter = await characters.create(req.body);
    res.status(200).json(newCharacter);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

app.put("/api/characters/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const character = await characters.findOneAndUpdate({ _id: id }, req.body);
    if (!character) {
      return res
        .status(404)
        .json({ message: `Character with ID: ${id} not located in database` });
    }
    res.status(200).json(character);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.delete("/api/characters/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const character = await characters.findByIdAndDelete({ _id: id });
    if (!character) {
      return res.status(404).json({
        message: `Character with ID: ${id} does not exist in the database`,
      });
    }
    res.status(200).json(character);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
