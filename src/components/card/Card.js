import React, { useState } from "react";
import { AiFillInfoCircle } from "react-icons/ai";
import "./card.scss";

const Card = ({ img, openLetter, setOpenLetter, isCorrect, setIsCorrect }) => {
  const [hint, setHint] = useState(false);
  const [inputPW, setInputPW] = useState("");
  const [error, setError] = useState(false);
  const handleHint = () => {
    setHint(!hint);
  };
  const password = "16-06-19";
  const changeHandler = (e) => {
    setInputPW(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (password === inputPW) {
      setIsCorrect(true);
      setOpenLetter(true);
      setError(false);
    } else if (password !== inputPW) {
      setError(true);
    }
    console.log("working");
  };
  return (
    <>
      <div className="display-card-container">
        <img className="display-image-card" src={img} alt=" " />
        <form onSubmit={submitHandler}>
          <input
            className="display-image-input"
            placeholder=" Secret Code"
            onChange={changeHandler}
          ></input>
          <button className="display-image-button" type="submit">
            check
          </button>
        </form>
      </div>
      <div className="hint">
        <AiFillInfoCircle onClick={handleHint} />
        {hint && <h1 className="hint-text">Hint : ASCII 4954454854454957</h1>}
        {error && <h1 className="error">incorrect password, try again!</h1>}
      </div>
    </>
  );
};

export default Card;
