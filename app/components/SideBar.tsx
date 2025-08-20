"use client";

import React, { useEffect, useState } from "react";
import Portal from "./Portal";
import Link from "next/link";
import clsx from "clsx";
import NavToggle from "./NavToggle";
import { navItems } from "./NavBar";
import { usePathname, useRouter } from "next/navigation";

type SideBarProps = {
  isOpen: boolean;
  toggleOpen: () => void;
};

const SideBar = ({ isOpen, toggleOpen }: SideBarProps) => {
  const [visible, setVisible] = useState(false);
  const [bgActive, setBgActive] = useState(false);

  const nav = useRouter();
  const activePath = usePathname();
  // Animate in/out
  useEffect(() => {
    if (isOpen) {
      setVisible(true);
      setTimeout(() => setBgActive(true), 50);
    } else {
      setBgActive(false);
      const timer = setTimeout(() => setVisible(false), 200);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Auto-close on resize > tablet
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        toggleOpen();
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen, toggleOpen]);

  if (!visible) return null;

  const renderItems = () =>
    navItems.map((item) => (
      <li key={item.label} onClick={() => isOpen && toggleOpen()}>
        {item.type === "button" ? (
          <button
            className=" cursor-pointer px-4 py-1 rounded-sm border-2 hover:shadow-md duration-200"
            onClick={() =>
              item.label === "Admin" ? nav.push("/admin") : item.onClick()
            }
          >
            {item.label}
          </button>
        ) : (
          <Link className=" group" href={item.path}>
            {item.label}
            <span
              className={clsx(
                "block h-[2px] duration-200 w-0 group-hover:w-full",
                item.path === activePath ? "w-full bg-teal-500" : "bg-gray-400"
              )}
            />
          </Link>
        )}
      </li>
    ));
  return (
    <Portal>
      {/* Backdrop */}
      <div
        className={clsx(
          "fixed inset-0 z-40 transition-colors duration-200",
          bgActive ? "bg-black/75" : "bg-transparent"
        )}
        onClick={toggleOpen}
      >
        {/* Sidebar */}
        <aside
          className={clsx(
            "absolute top-0 left-0 h-full w-full max-w-[250px] bg-gray-100 shadow-lg transition-transform duration-200",
            isOpen ? "translate-x-0" : "-translate-x-full"
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between p-4">
            <Link
              className="text-black hover:text-gray-800 duration-200 text-xl font-bold"
              href="/"
            >
              JeremyBarber
            </Link>
            <NavToggle bg="light" isOpen={isOpen} toggleOpen={toggleOpen} />
          </div>
          <ul className="flex flex-col gap-4 items-center">{renderItems()}</ul>
        </aside>
      </div>
    </Portal>
  );
};

export default SideBar;
