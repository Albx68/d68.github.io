import React, { useEffect, useRef } from "react";
import Lottie from "lottie-web";
import "./amazing.scss";
const AmazingAnim = () => {
  const amazingRef = useRef(null);
  useEffect(() => {
    Lottie.loadAnimation({
      container: amazingRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../../lotties/amazing.json"),
    });
  }, []);
  return (
    <>
      <div className="AmazingAnim" ref={amazingRef}></div>
    </>
  );
};

export default AmazingAnim;
