import React, { useContext } from "react";
import { CharacterwizardContext } from "../../../../../App.jsx";
import "./characterWizardClassItem.css";
import { Link } from "react-router-dom";

function CharacterWizardClassItem({ classLabel }) {
  const { characterClass, setCharacterClass } = useContext(
    CharacterwizardContext
  );
  const selectedCharacterClassUnformatted = classLabel;
  const selectedCharacterClass = selectedCharacterClassUnformatted.toLowerCase();

  const handleAddClass = () => {
    setCharacterClass(selectedCharacterClass);
    console.log(
      "here is the characterClass from the click handler",
      characterClass
    );
  };

  return (
    <div className="CharacterWizardClassItem">
      <Link
        className="add-class"
        onClick={handleAddClass}
        to={`/classpage/classdetails/${selectedCharacterClass}`}
      >
        ➕
      </Link>
      <p>{classLabel}</p>
    </div>
  );
}

export default CharacterWizardClassItem;
