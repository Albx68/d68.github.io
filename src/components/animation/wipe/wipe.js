import React, { useEffect, useRef } from "react";
import Lottie from "lottie-web";
import "./wipe.scss";
const Wipe = () => {
  const wipeRef = useRef(null);
  useEffect(() => {
    Lottie.loadAnimation({
      container: wipeRef.current,
      renderer: "svg",
      autoplay: true,
      animationData: require("../../lotties/wipe.json"),
    });
  }, []);
  return <div className="wipeAnim" ref={wipeRef}></div>;
};

export default Wipe;
