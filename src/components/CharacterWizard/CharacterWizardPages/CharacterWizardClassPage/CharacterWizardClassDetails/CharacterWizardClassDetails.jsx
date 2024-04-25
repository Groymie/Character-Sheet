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
      {characterClassData ? <Skills data={characterClassData} /> : <div></div>}
    </div>
  );
}

const Skills = ({ data }) => {
  // const createSetupArr = (num) => {
  //   const setupArr = [];
  //   for (let i = 0; i < num; i++) {
  //     setupArr.push("");
  //   }
  //   return setupArr;
  // };
  const numSkillChoices = data.proficiency_choices[0].choose;
  const { skillChoices, setSkillChoices } = useContext(CharacterwizardContext);
  const handleChange = (index, newSkillChoice) => {
    const updatedSkillChoices = [...skillChoices];
    updatedSkillChoices[index] = newSkillChoice;
    setSkillChoices(updatedSkillChoices);
  };
  console.log("here are the skill choices: ", skillChoices);

  const proficienciesObject = {};
  const { character, setCharacter } = useContext(CharacterwizardContext);

  const handleCharacterCreation = () => {
    proficienciesObject["skills"] = skillChoices;
    setCharacter(proficienciesObject);
  };

  // handleCharacterCreation();

  console.log("here is the character: ", character);

  const skillChoicesComponentArray = Array.from(
    { length: numSkillChoices },
    (_, index) => (
      <SkillChoices
        data={data}
        choices={skillChoices}
        onChange={(e) => handleChange(index, e.target.value)}
        key={index}
      />
    )
  );

  const findEquipment = () => {
    let weaponProficiencies = "";
    let armorProficiencies = "";
    const weaponProficienciesArr = [];
    const armorProficienciesArr = [];

    const pArray = data.proficiencies;
    const regex1 = /\b[wW]eapons\b/;
    const regex2 = /\b[aA]rmor\b/;
    for (let i = 0; i < data.proficiencies.length; i++) {
      const proficiencyName = pArray[i].name;
      if (regex1.test(proficiencyName)) {
        weaponProficienciesArr.push(proficiencyName);
        weaponProficiencies = weaponProficiencies.concat(", ", proficiencyName);
      } else if (regex2.test(proficiencyName)) {
        armorProficienciesArr.push(proficiencyName);
        armorProficiencies = armorProficiencies.concat(", ", proficiencyName);
      }
    }
    proficienciesObject["weapons"] = weaponProficienciesArr;
    proficienciesObject["armor"] = armorProficienciesArr;
    // console.log(proficienciesObject);
    return [weaponProficiencies, armorProficiencies];
  };

  const findSavingThrows = () => {
    let savingThrows = "";
    const savingThrowsArr = [];

    const stArray = data.saving_throws;
    for (let i = 0; i < stArray.length; i++) {
      const savingThrowName = stArray[i].name;
      // console.log("from loop: ", savingThrowName);
      savingThrowsArr.push(savingThrowName);
      savingThrows = savingThrows.concat(", ", savingThrowName);
    }
    // console.log("before return: ", savingThrows);
    proficienciesObject["savingThrows"] = savingThrowsArr;
    return savingThrows;
  };

  return (
    <div>
      <button onClick={handleCharacterCreation}>Submit Character</button>
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
      {skillChoicesComponentArray}
    </div>
  );
};

const SkillChoices = ({ data, onChange }) => {
  const proficiencyChoicesArray = data.proficiency_choices[0].from.options;

  return (
    <div className="ProficiencyChoices">
      <form action="">
        <p>
          <strong>Select Skill</strong>
        </p>
        <select
          name="choices"
          // value={skillChoice}
          onChange={onChange}
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
