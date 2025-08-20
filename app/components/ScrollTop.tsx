"use client";

import React, { useEffect, useState } from "react";
import Portal from "./Portal";
import { FiChevronUp } from "react-icons/fi";
import Container from "./Container";

const ScrollTop = () => {
  const [shouldDisplay, setShouldDisplay] = useState(false);
  const handleScrollTop = () => {
    scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleScrollY = () => {
    if (window.scrollY >= window.innerHeight / 2) {
      setShouldDisplay(true);
    } else {
      setShouldDisplay(false);
    }
  };
  useEffect(() => {
    handleScrollY();
    addEventListener("scroll", handleScrollY);
    return () => removeEventListener("scroll", handleScrollY);
  }, []);
  return (
    shouldDisplay && (
      <Portal>
        <button
          onClick={handleScrollTop}
          className="z-1 fixed cursor-pointer flex justify-center items-center bottom-10 border-1 shadow-md border-gray-300 right-10 bg-indigo-500 text-white w-10 h-10 rounded-full"
        >
          <FiChevronUp />
        </button>
      </Portal>
    )
  );
};

export default ScrollTop;
