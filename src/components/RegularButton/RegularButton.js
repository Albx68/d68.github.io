import React, { useState, useEffect, useRef } from "react";
import Lottie from "lottie-web";
import "./RegularButton.scss";
import Loading from "../loading/Loading";

import Hbd from "../animation/happybirthday/hbd";
import About from "../about/About";
const RegularButton = () => {
  const squigglyAnim1 = useRef(null);
  const popAnimRef = useRef(null);
  const [load, setLoading] = useState(1);
  const [wipe, setWipe] = useState(false);
  const [i, setI] = useState(0);

  useEffect(() => {
    Lottie.loadAnimation({
      container: squigglyAnim1.current,
      renderer: "svg",
      loop: 0,
      autoplay: true,
      animationData: require("../../lotties/squigglyarrow.json"),
    });
    Lottie.loadAnimation({
      container: popAnimRef.current,
      renderer: "svg",
      loop: 1,
      autoplay: true,
      animationData: require("../../lotties/pop.json"),
    });
  }, [i]);
  const handleClick = () => {
    setI(i + 1);

    if (i > 1) {
      // setTimeout(() => {
      //   setWipe(true);
      // }, 4300);
      // setTimeout(() => {
      //   setLoading(7);
      // }, 1);
      // setTimeout(() => {
      //   setLoading(2);
      // }, 1);
      setTimeout(() => {
        setLoading(2);
      }, 5500);
      setTimeout(() => {
        setLoading(3);
        setWipe(false);
      }, 10100);
      setTimeout(() => {
        setLoading(4);
      }, 15000);
      setTimeout(() => {
        setLoading(5);
      }, 19500);
      setTimeout(() => {
        setLoading(6);
      }, 24000);
      setTimeout(() => {
        setLoading(7);
      }, 28000);
    }
  };
  return (
    <>
      <div className={`regular-btn-cont `}>
        {i < 3 ? (
          <div className="regular-btn-content">
            {i === 0 && (
              <h1 className="btn-heading">
                Just a regular button, nothing special about it ...
              </h1>
            )}
            {i === 1 && (
              <h1 className="btn-heading red">
                Curiosity is a peculiar thing, isn't it? ...
              </h1>
            )}
            {i === 2 && (
              <h1 className="btn-heading red">A curious person, I see ...</h1>
            )}
            <div className="btn-container">
              <button
                className={`${i === 0 && "regular-btn"} ${
                  i === 1 && "regular-btn2"
                } ${i === 2 && "regular-btn3"}`}
                onClick={handleClick}
              >
                {i === 0 && "regular button"}
                {i === 1 && "notice something ?"}
                {i === 2 && "click on me !!"}
              </button>
              {i > 1 ? <div className="popAnim" ref={popAnimRef}></div> : null}
            </div>
            {i > 1 ? (
              <div className="squigglyAnim1" ref={squigglyAnim1}></div>
            ) : null}
          </div>
        ) : load === 1 ? (
          <Loading />
        ) : null}
        {/* {wipe && load !== 2 && <Wipe />} */}
        {load === 2 && <Hbd />}
        {load === 3 && (
          <h1 className="btn-heading-2 red duration6 ">
            A lot of partying, snacks and more...
            <br></br>
            Let's have a great day, Shall we XD?
          </h1>
        )}
        {load === 4 && (
          <h1 className="btn-heading-2 red ">But wait!!! There's more</h1>
        )}
        {load === 5 && (
          <h1 className="btn-heading-2 red ">
            First, lemme talk about you a bit
          </h1>
        )}
        {load === 6 && (
          <h1 className="btn-heading-2 red ">Devia Rajkumari, You are...</h1>
        )}
        {load === 7 && (
          <>
            <About />
          </>
        )}
      </div>
    </>
  );
};

export default RegularButton;
