import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { CharacterwizardContext } from "../../../../../App.jsx";
import axios from "axios";
import "./characterWizardClassDetails.css";

function CharacterWizardClassDetails() {
  const [characterClassData, setCharacterClassData] = useState();
  const { characterClass } = useContext(CharacterwizardContext);
  const selectedCharacterClass = characterClass;
  //   console.log("selected class: ", selectedCharacterClass);
  let { id } = useParams();

  useEffect(() => {
    const data_URL = `https://www.dnd5eapi.co/api/classes/${id}`;
    console.log(data_URL);
    axios.get(data_URL).then((res) => {
      setCharacterClassData(res.data);
    });
  }, []);

  return (
    <div className="CharacterWizardClassDetails">
      {characterClassData ? (
        <Proficiencies data={characterClassData} />
      ) : (
        <div></div>
      )}
    </div>
  );
}

const Proficiencies = ({ data }) => {
  const numProficiencyChoices = data.proficiency_choices[0].choose;
  const proficiencyChoicesComponentArray = Array.from(
    { length: numProficiencyChoices },
    (_, index) => <ProficiencyChoices data={data} key={index} />
  );
  const findEquipment = () => {
    let weapons = "";
    let armor = "";
    const pArray = data.proficiencies;
    const regex1 = /\b[wW]eapons\b/;
    const regex2 = /\b[aA]rmor\b/;
    for (let i = 0; i < data.proficiencies.length; i++) {
      const proficiencyName = pArray[i].name;
      if (regex1.test(proficiencyName)) {
        weapons = weapons.concat(", ", proficiencyName);
      } else if (regex2.test(proficiencyName)) {
        armor = armor.concat(", ", proficiencyName);
      }
    }
    return [weapons, armor];
  };

  const findSavingThrows = () => {
    let savingThrows = "";
    const stArray = data.saving_throws;
    for (let i = 0; i < stArray.length; i++) {
      const savingThrowName = stArray[i].name;
      // console.log("from loop: ", savingThrowName);
      savingThrows = savingThrows.concat(", ", savingThrowName);
    }
    // console.log("before return: ", savingThrows);
    return savingThrows;
  };

  return (
    <div>
      <p>
        <strong>Weapon:</strong>
        {findEquipment()[0]}
      </p>
      <p>
        <strong>Skills:</strong>
        {data.proficiency_choices[0].desc}
      </p>
      <p>
        <strong>Armor:</strong>
        {findEquipment()[1]}
      </p>
      <p>
        <strong>SavingThrows:</strong>
        {findSavingThrows()}
      </p>
      {proficiencyChoicesComponentArray}
    </div>
  );
};

const ProficiencyChoices = ({ data }) => {
  const [proficiencyChoice, setProficiencyChoice] = useState(null);
  const handleChange = (e) => {
    setProficiencyChoice(e.target.value);
  };

  const proficiencyChoicesArray = data.proficiency_choices[0].from.options;

  return (
    <div className="ProficiencyChoices">
      <form action="">
        <p>
          <strong>Select Skill</strong>
        </p>
        <select
          name="choices"
          value={proficiencyChoice}
          onChange={handleChange}
          id=""
        >
          <option>--Select a skill--</option>
          {proficiencyChoicesArray.map((choice) => (
            <option key={Math.random() * (10000 - 1) + 1}>
              {choice.item.name}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
};

export default CharacterWizardClassDetails;
