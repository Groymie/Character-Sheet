import React, { useContext } from "react";
import { CharacterwizardContext } from "../../../../../App.jsx";
import "./characterWizardRaceItem.css";
// import axios from "axios";
import { Link } from "react-router-dom";

function CharacterWizardRaceItem({ raceLabel }) {
  const { race, setRace } = useContext(CharacterwizardContext);
  // console.log("here is the context: ", race, " ", setRace);
  const selectedRaceUnformatted = raceLabel;
  const selectedRace = selectedRaceUnformatted.toLowerCase();

  const handleAddRace = () => {
    console.log(`here is the selected race: ${selectedRace}`);
    setRace(selectedRace);
    console.log("here is the context from the item button handler: ", race);
  };

  return (
    <div className="CharacterWizardRaceItem">
      <Link
        className="add-race"
        onClick={handleAddRace}
        to={`/wizard/racedetails/${selectedRace}`}
      >
        ➕
      </Link>
      <p>{raceLabel}</p>
    </div>
  );
}

export default CharacterWizardRaceItem;
