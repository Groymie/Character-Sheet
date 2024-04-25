import { useState, createContext } from "react";
import "./App.css";
import CharacterWizard from "./components/CharacterWizard/CharacterWizard";
import CharacterWizardMenu from "./components/CharacterWizard/CharacterWizardMenu/CharacterWizardMenu";
import CharacterWizardRaceDetails from "./components/CharacterWizard/CharacterWizardPages/CharacterWizardRacePage/CharacterWizardRaceDetails/CharacterWizardRaceDetails";
import CharacterWizardClassPage from "./components/CharacterWizard/CharacterWizardPages/CharacterWizardClassPage/CharacterWizardClassPage";
import CharacterWizardClassDetails from "./components/CharacterWizard/CharacterWizardPages/CharacterWizardClassPage/CharacterWizardClassDetails/CharacterWizardClassDetails";
// import CharacterWizardClassDetails from "./components/CharacterWizard/CharacterWizardPages/CharacterWizardClassPage/CharacterWizardClassDetails/CharacterWizardRaceDetails";
import { Route, Routes } from "react-router-dom";

export const CharacterwizardContext = createContext();

// This is the container for everything else. The character sheet essentially.
function App() {
  const createSetupArr = (num) => {
    const setupArr = [];
    for (let i = 0; i < num; i++) {
      setupArr.push("");
    }
    return setupArr;
  };

  const [race, setRace] = useState("");
  const [characterClass, setCharacterClass] = useState("");
  const [skillChoices, setSkillChoices] = useState(createSetupArr);
  const [character, setCharacter] = useState(null);

  return (
    <div className="App">
      <CharacterwizardContext.Provider
        value={{
          race,
          setRace,
          characterClass,
          setCharacterClass,
          skillChoices,
          setSkillChoices,
          character,
          setCharacter,
        }}
      >
        <CharacterWizardMenu />
        <Routes>
          <Route path="/wizard" element={<CharacterWizard />} />
          <Route
            path="/wizard/racedetails/:id"
            element={<CharacterWizardRaceDetails selRace={race} />}
          />
          <Route path="/classpage" element={<CharacterWizardClassPage />} />
          <Route
            path="/classpage/classdetails/:id"
            element={<CharacterWizardClassDetails />}
          />
        </Routes>
      </CharacterwizardContext.Provider>
    </div>
  );
}

export default App;
