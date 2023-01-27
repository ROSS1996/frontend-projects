import { useState, useEffect } from "react";

import Footer from "./footer";
import Header from "./header";

export default function Layout({ children }) {
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Header windowDimensions={windowDimensions} />
      <main>{children}</main>
      <Footer windowDimensions={windowDimensions} />
    </>
  );
}
