import React, { useEffect, useRef } from "react";
import Lottie from "lottie-web";
import "./Catch.scss";
const CatchAnim = () => {
  const catchRef = useRef(null);
  useEffect(() => {
    Lottie.loadAnimation({
      container: catchRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../../lotties/catch.json"),
    });
  }, []);
  return (
    <>
      <div className="catchAnim" ref={catchRef}></div>
    </>
  );
};

export default CatchAnim;
