import React, { useState } from "react";

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

  //8주차 실습2 계속해보쟝구
  return (
    <form>
      <fieldset>
        <label htmlFor="name">name</label>
        <input
          name="name"
          id="name"
          placeholder="Fill in Fighter's name"
          type="text"
          className="form-input"
          onChange={handleChangeName}
          value={name}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="name">Gym name</label>
        <input
          name="name"
          id="name"
          placeholder="Fill in Fighter's Gym name"
          type="text"
          onChange={handleChangeGym}
          className="form-input"
          value={gym}
        />
      </fieldset>
      <div>
        <button>Submit</button>
        <button>Reset</button>
      </div>
    </form>
  );
}
