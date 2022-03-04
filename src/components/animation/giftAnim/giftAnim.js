import React, { useEffect, useRef, useState } from "react";
import Lottie from "lottie-web";
import "./gift.scss";
const GiftAnim = ({ scissor, setScissor, message, setMessage }) => {
  const giftRef = useRef(null);

  useEffect(() => {
    Lottie.loadAnimation({
      container: giftRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../../lotties/gift.json"),
    });
  }, []);
  const displayMessage = () => {
    setMessage(true);
  };
  return (
    <div className="giftAnim" ref={giftRef} onClick={displayMessage}></div>
  );
};

export default GiftAnim;
