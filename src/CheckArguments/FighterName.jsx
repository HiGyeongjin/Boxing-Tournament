import React, { useState } from "react";
import "./fighter-name.css";

//상태를 정의하기 위한 inputStatus
const InputStatus = {
  NORMAL: "normal",
  ERROR: "error",
  SUCCESS: "success",
};

export default function FighterName() {
  const [name, setName] = useState("");
  const [gym, setGym] = useState("");

  const [nameInputStatus, setNameInputStatus] = useState(InputStatus.NORMAL);
  const [gymInputStatus, setGymInputStatus] = useState(InputStatus.NORMAL);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeGym = (e) => {
    setGym(e.target.value);
  };

  const validateName = () => {
    if (name.length < 2 || name.length > 30) {
      setNameInputStatus(InputStatus.ERROR);
      return;
    }
    setNameInputStatus(InputStatus.SUCCESS);
  };

  const validateGymName = () => {
    if (gym.length < 1 || gym.length > 30) {
      setGymInputStatus(InputStatus.ERROR);
      return;
    }
    setGymInputStatus(InputStatus.SUCCESS);
  };

  const submitForm = () => {
    console.log("submit form!");
    validateName(name);
    validateGymName(gym);
  };

  const resetForm = () => {
    setName("");
    setGym("");
  };

  const getInputStatusStyle = (status) => {
    if (status === InputStatus.ERROR) {
      return "input-invalid";
    } else if (status === InputStatus.SUCCESS) {
      return "input-valid";
    }
    return "";
  };

  const getInputStatusTextStyle = (status) => {
    if (status === InputStatus.ERROR) {
      return "text-error";
    }
    return "";
  };

  return (
    <form className="form-container">
      <fieldset className="form-fieldset">
        <label
          htmlFor="name"
          className={"form-label " + getInputStatusTextStyle(nameInputStatus)}
        >
          Boxer Name
        </label>
        <input
          name="name"
          id="name"
          placeholder="Fill in Fighter's name"
          type="text"
          onChange={handleChangeName}
          className={"form-input " + getInputStatusStyle(nameInputStatus)}
          value={name}
        />
        <div className="form-error">
          {nameInputStatus === InputStatus.ERROR &&
            "Name has to be more than one character."}
        </div>
      </fieldset>
      <fieldset className="form-fieldset">
        <label
          htmlFor="name"
          className={"form-label " + getInputStatusTextStyle(gymInputStatus)}
        >
          Gym name
        </label>
        <input
          name="name"
          id="name"
          placeholder="Fill in Fighter's Gym name"
          type="text"
          onChange={handleChangeGym}
          className={"form-input " + getInputStatusStyle(gymInputStatus)}
          value={gym}
        />
        <div className="form-error">
          {gymInputStatus === InputStatus.ERROR && "Insert without space."}
        </div>
      </fieldset>
      <div className="button-container">
        <button
          type="button"
          onClick={resetForm}
          className="reset-button form-button"
        >
          Reset
        </button>
        <button
          type="button"
          onClick={submitForm}
          className="submit-button form-button"
        >
          Submit
        </button>
      </div>

      {/* debug code */}
      {/* <pre className="debug">
        <code>
          {JSON.stringify(
            { name, gym, nameInputStatus, gymInputStatus },
            null,
            2
          )}
        </code>
      </pre> */}
    </form>
  );
}
