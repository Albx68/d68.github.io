import React, { useEffect, useRef } from "react";
import Lottie from "lottie-web";
import "./cool.scss";
const CoolAnim = () => {
  const coolRef = useRef(null);
  useEffect(() => {
    Lottie.loadAnimation({
      container: coolRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../../lotties/cool.json"),
    });
  }, []);
  return (
    <>
      <div className="coolAnim" ref={coolRef}></div>
    </>
  );
};

export default CoolAnim;
