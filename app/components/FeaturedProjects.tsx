"use client";
import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Container from "./Container";
import Card, { CardAction } from "./FeaturedCard";

type Tag = {
  id: number;
  name: string;
};

type Image = {
  id: number;
  url: string;
};

export type Project = {
  id: number;
  title: string;
  description: string;
  coverImageIndex: number;
  tags: Tag[];
  liveUrl: string;
  codeUrl: string;
  images: Image[];
};

const FeaturedProjects = ({ projects }: { projects: Project[] }) => {
  return (
    <section id="projects" className="bg-gray-100">
      <Container className="py-24">
        <h2 className="text-3xl font-bold text-center mb-12">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const actions: CardAction[] = [
              {
                label: "Code",
                href: project.codeUrl,
                icon: <FaGithub />,
                variant: "primary",
              },
              {
                label: "Demo",
                href: project.liveUrl,
                icon: <FaExternalLinkAlt />,
                variant: "secondary",
              },
            ];

            return (
              <Card
                key={project.id}
                id={project.id}
                title={project.title}
                description={project.description}
                image={project.images[project.coverImageIndex]?.url}
                tags={project.tags}
                actions={actions}
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default FeaturedProjects;
