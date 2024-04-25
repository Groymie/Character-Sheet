import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { CharacterwizardContext } from "../../../../../App.jsx";
import axios from "axios";
import "./characterWizardRaceDetails.css";

function CharacterWizardRaceDetails() {
  const [raceData, setRaceData] = useState();
  const race = useContext(CharacterwizardContext);
  const selectedRace = race;
  console.log("selected race: ", selectedRace);
  let { id } = useParams();
  // console.log(raceCtx);

  useEffect(() => {
    console.log("lalala: ", race);
    const data_URL = `https://www.dnd5eapi.co/api/races/${id}`;
    console.log(data_URL);
    axios.get(data_URL).then((res) => {
      console.log("here is the response object", res);
      setRaceData(res.data);
      console.log(`here is the race data ${raceData}`);
    });
    // async function fetchData() {}

    // fetchData();
  }, []);

  return (
    <div className="CharacterWizardRaceDetails">
      {raceData ? <AbilityScoreIncreases data={raceData} /> : <div></div>}
    </div>
  );
}

const AbilityScoreIncreases = ({ data }) => {
  console.log("here is the data: ", data);
  const abilityScoreIncreaseArray = data.ability_bonuses;
  console.log("blahblahblah: ", abilityScoreIncreaseArray);

  return (
    <>
      {abilityScoreIncreaseArray.map((ab) => (
        <form action="" key={Math.random() * (10000 - 1) + 1}>
          <AbilityScoreIncrease
            ability={ab.ability_score.name}
            bonus={ab.bonus}
            // key={Math.random() * (10000 - 1) + 1}
          />
        </form>
      ))}
    </>
  );
};

const AbilityScoreIncrease = ({ ability, bonus }) => {
  const [abilityScoreIncrease, setAbilityScoreIncrease] = useState(null);
  const handleChange = (e) => {
    setAbilityScoreIncrease(e.target.value);
  };

  return (
    <div className="AbilityScoreIncrease">
      <p>
        <strong>Increase Ability Score +{bonus}</strong>
      </p>
      <select
        name={ability}
        value={abilityScoreIncrease}
        onChange={handleChange}
        id={ability}
      >
        <option>--Select an ability--</option>
        <option value={ability}>{ability}</option>
      </select>
    </div>
  );
};

// const Age = () => {};

// const Alignment = () => {};

// const Languages = () => {};

// const Size = () => {};

// const Speed = () => {};

export default CharacterWizardRaceDetails;
