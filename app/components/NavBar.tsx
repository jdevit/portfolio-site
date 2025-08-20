"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import SideBar from "./SideBar";
import NavToggle from "./NavToggle";
import NavItem, { NavItemProps } from "./NavItem";

type NavBarProps = {
  navItems: NavItemProps[];
};

export const navItems: NavItemProps[] = [
  { type: "link", label: "Home", path: "/" },
  { type: "link", label: "About", path: "/#about" },
  { type: "link", label: "Posts", path: "/posts" },
  { type: "link", label: "Projects", path: "/#projects" },
  { type: "link", label: "Contact", path: "/contact" },
  {
    type: "button",
    label: "Admin",
    onClick: () => {},
  },
];

const NavBar = ({ navItems }: NavBarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const nav = useRouter();
  const path = usePathname();
  const [activePath, setActivePath] = useState(path);

  useEffect(() => {
    const updateActive = () => {
      setActivePath(path + window.location.hash);
    };
    updateActive();
    window.addEventListener("hashchange", updateActive);
    return () => window.removeEventListener("hashchange", updateActive);
  }, [path]);

  const renderItems = () =>
    navItems.map((item) => {
      return (
        <NavItem
          key={item.label}
          item={item}
          nav={nav}
          activePath={activePath}
          setActivePath={setActivePath}
        />
      );
    });

  const toggleOpen = () => setIsOpen((p) => !p);

  return (
    <>
      <nav className="flex justify-between items-center h-8">
        <div>
          <h1 className="text-xl font-bold">
            <Link
              className="text-white hover:text-gray-200 duration-200"
              href="/"
              onClick={() => setActivePath("/")}
            >
              JeremyBarber
            </Link>
          </h1>
        </div>
        <ul className="md:flex items-center gap-4 hidden">{renderItems()}</ul>
        <NavToggle isOpen={isOpen} toggleOpen={toggleOpen} />
      </nav>
      <SideBar isOpen={isOpen} toggleOpen={toggleOpen} />
    </>
  );
};

export default NavBar;
