import React, { useEffect, useRef } from "react";
import Lottie from "lottie-web";

const Shine = () => {
  const shineRef = useRef(null);
  useEffect(() => {
    Lottie.loadAnimation({
      container: shineRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../../lotties/shine.json"),
    });
  }, []);
  return (
    <>
      <div className="ShineAnim" ref={shineRef}></div>
    </>
  );
};

export default Shine;
