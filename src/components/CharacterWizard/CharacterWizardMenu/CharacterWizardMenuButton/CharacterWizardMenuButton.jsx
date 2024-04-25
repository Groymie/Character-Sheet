import React from "react";
import { Link } from "react-router-dom";
import "./characterWizardMenuButton.css";

function CharacterWizardMenuButton({ title, pathway }) {
  return (
    <div className="CharacterWizardMenuButton">
      <button>
        <Link to={pathway}>{title}</Link>
      </button>
    </div>
  );
}

export default CharacterWizardMenuButton;
