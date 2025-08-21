import React from "react";
import Container from "./Container";
import Link from "next/link";

export type HeroProps = {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
};

const Hero = ({ title, description, buttonText, buttonLink }: HeroProps) => {
  return (
    <section
      className="bg-cover"
      style={{ backgroundImage: "url(./services_background.png)" }}
    >
      <div className="bg-[rgba(0,0,0,0.65)]">
        <Container className="min-h-[calc(100vh-32px)] flex flex-col gap-6 items-center justify-center text-center py-24">
          <h2
            style={{ textShadow: "1px 1px black" }}
            className="text-white text-5xl font-extrabold md:text-6xl leading-tight"
          >
            {title}
          </h2>
          <p className="text-white max-w-4xl mx-auto mt-4 text-xl md:text-2xl leading-relaxed">
            {description}
          </p>
          <Link
            className="text-white duration-200 hover:bg-teal-600 bg-teal-500 px-6 py-3 rounded-md font-semibold text-xl md:text-2xl shadow-lg mt-6 inline-block"
            href={buttonLink}
          >
            {buttonText}
          </Link>
        </Container>
      </div>
    </section>
  );
};

export default Hero;
