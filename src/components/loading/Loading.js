import React, { useEffect, useRef } from "react";
import Lottie from "lottie-web";
const Loading = () => {
  const loadingRef = useRef(null);
  useEffect(() => {
    Lottie.loadAnimation({
      container: loadingRef.current,
      renderer: "svg",
      loop: 0,
      autoplay: true,
      animationData: require("../../lotties/loading.json"),
    });
  }, []);
  return <div ref={loadingRef}></div>;
};

export default Loading;
