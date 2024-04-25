import React from "react";
import "./characterWizardClassPage.css";
import CharacterWizardClassItem from "./CharacterWizardClassItem/CharacterWizardClassItem";

function CharacterWizardClassPage() {
  const classesArray = ["Fighter", "Cleric", "Rogue", "Wizard"];
  return (
    <div className="CharacterWizardClassPage">
      {classesArray.map((c) => (
        <CharacterWizardClassItem classLabel={c} key={c} />
      ))}
    </div>
  );
}

export default CharacterWizardClassPage;
