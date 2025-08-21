"use client";

import React from "react";
import Container from "./Container";
import NavBar from "./NavBar";
import { navItems } from "../data";

const SiteHeader = () => {
  return (
    <header className="border-b-2 border-gray-400 bg-gradient-to-r from-indigo-600 to-indigo-800 flex-none">
      <Container className="sm:max-w-7xl">
        <NavBar navItems={navItems} />
      </Container>
    </header>
  );
};

export default SiteHeader;
