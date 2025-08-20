"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import SideBar from "./SideBar";
import NavToggle from "./NavToggle";

type NavItem =
  | { type: "link"; label: string; path: string }
  | { type: "button"; label: string; onClick: () => void };

type NavBarProps = {
  navItems: NavItem[];
};

export const navItems: NavItem[] = [
  { type: "link", label: "Home", path: "/" },
  { type: "link", label: "About", path: "#about" },
  { type: "link", label: "Posts", path: "/posts" },
  { type: "link", label: "Projects", path: "/projects" },
  { type: "link", label: "Contact", path: "/contact" },
  {
    type: "button",
    label: "Admin",
    onClick: () => {
      // router used in component instead
    },
  },
];

const NavBar = ({ navItems }: NavBarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const nav = useRouter();
  const activePath = usePathname();

  const renderItems = () =>
    navItems.map((item) => (
      <li key={item.label}>
        {item.type === "button" ? (
          <button
            className="text-gray-200 cursor-pointer px-4 py-1 rounded-sm border-2 hover:shadow-md duration-200"
            onClick={() =>
              item.label === "Admin" ? nav.push("/admin") : item.onClick()
            }
          >
            {item.label}
          </button>
        ) : (
          <Link className="text-white group" href={item.path}>
            {item.label}
            <span
              className={clsx(
                "block h-[2px] duration-200 w-0 group-hover:w-full",
                item.path === activePath ? "w-full bg-teal-500" : "bg-white"
              )}
            />
          </Link>
        )}
      </li>
    ));

  const toggleOpen = () => setIsOpen((p) => !p);
  return (
    <>
      <nav className="flex justify-between items-center h-8">
        <div>
          <h1 className="text-xl font-bold">
            <Link
              className="text-white hover:text-gray-200 duration-200"
              href="/"
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
