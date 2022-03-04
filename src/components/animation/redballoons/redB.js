import React, { useEffect, useRef } from "react";
import Lottie from "lottie-web";
import "./redB.scss";
const RedB = () => {
  const redbRef = useRef(null);

  useEffect(() => {
    Lottie.loadAnimation({
      container: redbRef.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: require("../../../lotties/red balloons.json"),
    });
  }, []);
  return (
    <>
      <div className="redbAnim" ref={redbRef}></div>
    </>
  );
};

export default RedB;
