import React from "react";
import Container from "./Container";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      className="bg-cover"
      style={{ backgroundImage: "url(./services_background.png)" }}
    >
      <div className="bg-[rgba(0,0,0,0.65)]">
        <Container className="min-h-[calc(100vh-32px)] flex flex-col gap-6 items-center justify-center text-center py-20">
          <h2
            style={{ textShadow: "1px 1px black" }}
            className="text-white text-5xl font-extrabold md:text-6xl leading-tight"
          >
            Cloud Engineer | Automation & Full-Stack Solutions
          </h2>
          <p className="text-white max-w-4xl mx-auto mt-4 text-xl md:text-2xl leading-relaxed">
            I design and troubleshoot Linux and networking systems, streamline
            operations with automation scripting in Bash, Python, and Node.js,
            and build light full-stack tools with Node.js and React to support
            cloud-first solutions.
          </p>
          <Link
            className="text-white duration-200 hover:bg-teal-600 bg-teal-500 px-6 py-3 rounded-md font-semibold text-xl md:text-2xl shadow-lg mt-6 inline-block"
            href="/contact"
          >
            Hire Me
          </Link>
        </Container>
      </div>
    </section>
  );
};

export default Hero;
