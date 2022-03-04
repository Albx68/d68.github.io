import React, { useEffect, useRef } from "react";
import Lottie from "lottie-web";
import RedB from "../redballoons/redB";
import "./hbd.scss";
const Hbd = () => {
  const hbdRef = useRef(null);
  useEffect(() => {
    Lottie.loadAnimation({
      container: hbdRef.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: require("../../../lotties/hbd.json"),
    });
  }, []);
  return (
    <>
      <RedB />

      <div className="hbdAnim" ref={hbdRef}></div>
    </>
  );
};

export default Hbd;
