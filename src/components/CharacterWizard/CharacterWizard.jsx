import React, { useState } from "react";
import "./characterWizard.css";
import CharacterWizardMenu from "./CharacterWizardMenu/CharacterWizardMenu";
import CharacterWizardRacePage from "./CharacterWizardPages/CharacterWizardRacePage/CharacterWizardRacePage";

function CharacterWizard() {
  // const [tab, setTab] = useState('Race');
  // const [characterName, setCharacterName] = useState("");
  // const [characterRace, setCharacterRace] = useState("");
  // const [characterClass, setCharacterClass] = useState("");
  // const [characterAbilitiesBase, setCharacterAbilitiesBase] = useState({});
  // const [racialAbilityBonuses, setRacialAbilityBonuses] = useState("");
  return (
    <div>
      {/* <CharacterWizardMenu /> */}
      <CharacterWizardRacePage />
    </div>
  );
}

export default CharacterWizard;
