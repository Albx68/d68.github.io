import React, { useEffect, useRef } from "react";
import Lottie from "lottie-web";

const SpaceAnim = () => {
  const spaceRef = useRef(null);
  useEffect(() => {
    Lottie.loadAnimation({
      container: spaceRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../../lotties/space.json"),
    });
  }, []);
  return (
    <>
      <div className="spaceAnim" ref={spaceRef}></div>
    </>
  );
};

export default SpaceAnim;
