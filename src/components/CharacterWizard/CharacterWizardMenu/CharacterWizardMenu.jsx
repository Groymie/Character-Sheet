import React from "react";
import "./characterWizardMenu.css";
import CharacterWizardMenuButton from "./CharacterWizardMenuButton/CharacterWizardMenuButton";

function CharacterWizardMenu() {
  const buttonTitleArray = [
    ["Race", "/wizard"],
    ["Class", "/classpage"],
    ["Abilities", "/abilitiespage"],
    ["Background", "/backgroundpage"],
    ["Equipment", "/equipmentpage"],
    ["Commit", "/commitpage"],
  ];
  return (
    <div className="CharacterWizardMenu">
      {buttonTitleArray.map((arr) => (
        <CharacterWizardMenuButton
          title={arr[0]}
          pathway={arr[1]}
          key={arr[1]}
        />
      ))}
    </div>
  );
}

export default CharacterWizardMenu;
