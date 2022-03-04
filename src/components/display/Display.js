import React, { useState } from "react";
import "./display.scss";
import Card from "../card/Card";
const Display = ({
  img,
  scissor,
  setMessage,
  text,
  item,
  openLetter,
  setOpenLetter,
  isCorrect,
  setIsCorrect,
}) => {
  const [display, setDisplay] = useState(true);

  const handleDisplay = () => {
    setMessage(false);
    setDisplay(!display);
  };

  return (
    <>
      {scissor && !isCorrect && (
        <div>
          {display ? (
            <>
              <div className="display-container">
                <div className="display-image-container">
                  {item === "scissor" ? (
                    <img className="display-image" src={img} alt=" " />
                  ) : null}

                  {item === "card" ? (
                    <Card
                      img={img}
                      openLetter={openLetter}
                      setOpenLetter={setOpenLetter}
                      isCorrect={isCorrect}
                      setIsCorrect={setIsCorrect}
                    />
                  ) : null}
                </div>

                <div className="bg" onClick={handleDisplay}></div>
                {item === "scissor" ? (
                  <h1 className="gift-message">{text}</h1>
                ) : (
                  <h1 className="gift-message-2">{text}</h1>
                )}
              </div>
            </>
          ) : null}
        </div>
      )}
    </>
  );
};

export default Display;
