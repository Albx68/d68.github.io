import React, { useEffect, useRef } from "react";
import Lottie from "lottie-web";
import "./super.scss";
const SuperAnim = () => {
  const superRef = useRef(null);
  useEffect(() => {
    Lottie.loadAnimation({
      container: superRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../../lotties/superhero.json"),
    });
  }, []);
  return (
    <>
      <div className="superAnim" ref={superRef}></div>
    </>
  );
};

export default SuperAnim;
