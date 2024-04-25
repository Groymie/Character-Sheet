import React, { useState } from "react";
import "./characterWizardRacePage.css";
import CharacterWizardRaceItem from "./CharacterWizardRaceItem/CharacterWizardRaceItem";

function CharacterWizardRacePage() {
  // const [race, setRace] = useState("");

  const racesArray = ["Human", "Elf", "Dwarf"];

  // const changeRace = (newRace) => {
  //   setRace(newRace);
  // };

  // const changeRaceData = (newRaceData) => {
  //   setRaceData(newRaceData);
  // };

  return (
    <div className="CharacterWizardRacePage">
      {racesArray.map((r) => (
        <CharacterWizardRaceItem raceLabel={r} key={r} />
      ))}
    </div>
  );
}

export default CharacterWizardRacePage;
