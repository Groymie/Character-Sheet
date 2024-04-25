import mongoose from "mongoose";
const proficienciesSchema = new mongoose.Schema({
  weapons: {
    type: [String],
  },
  skills: {
    type: [String],
  },
  armor: {
    type: [String],
  },
  savingThrows: {
    type: [String],
  },
});

const characterSchema = new mongoose.Schema({
  proficiencies: {
    type: proficienciesSchema,
    // required: true,
  },
});

const character = mongoose.model("character", characterSchema);
export default character;
