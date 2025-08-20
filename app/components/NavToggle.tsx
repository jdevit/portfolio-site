import clsx from "clsx";
import React from "react";
import { FiMenu, FiX } from "react-icons/fi";

const NavToggle = ({
  toggleOpen,
  isOpen,
  bg = "dark",
}: {
  toggleOpen: () => void;
  isOpen: boolean;
  bg?: "dark" | "light";
}) => {
  return (
    <button
      className={clsx({
        "text-2xl md:hidden  cursor-pointer duration-200": true,
        "text-gray-900 hover:text-gray-800": bg === "light",
        "text-white hover:text-gray-200": bg === "dark",
      })}
      onClick={toggleOpen}
    >
      {isOpen ? <FiX /> : <FiMenu />}
    </button>
  );
};

export default NavToggle;
