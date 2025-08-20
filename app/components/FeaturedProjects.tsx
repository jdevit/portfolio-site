"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

type Tag = {
  id: number;
  name: string;
};

type Image = {
  id: number;
  url: string;
};

type Project = {
  id: number;
  title: string;
  description: string;
  coverImageIndex: number;
  tags: Tag[];
  liveUrl: string;
  codeUrl: string;
  images: Image[];
};

const FeaturedProjects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      coverImageIndex: 0,
      title: "E-Commerce Platform",
      description:
        "A full-featured online shopping platform with payment integration and inventory management.",
      tags: [
        { id: 1, name: "React" },
        { id: 2, name: "Node.js" },
        { id: 3, name: "MongoDB" },
        { id: 4, name: "Stripe API" },
      ],
      liveUrl: "https://placehold.co/400",
      codeUrl: "https://github.com/example/ecommerce",
      images: [
        { id: 1, url: "https://placehold.co/400" },
        { id: 2, url: "https://placehold.co/400" },
      ],
    },
    {
      id: 2,
      coverImageIndex: 0,
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates and team features.",
      tags: [
        { id: 1, name: "TypeScript" },
        { id: 2, name: "Firebase" },
        { id: 3, name: "Tailwind CSS" },
      ],
      liveUrl: "https://placehold.co/400",
      codeUrl: "https://github.com/example/taskmanager",
      images: [{ id: 1, url: "https://placehold.co/400" }],
    },
    {
      id: 3,
      coverImageIndex: 0,
      title: "Weather Dashboard",
      description:
        "A responsive weather dashboard with location-based forecasts and interactive maps.",
      tags: [
        { id: 1, name: "React" },
        { id: 2, name: "OpenWeather API" },
        { id: 3, name: "Chart.js" },
      ],
      liveUrl: "https://placehold.co/400",
      codeUrl: "https://github.com/example/weatherdashboard",
      images: [
        { id: 1, url: "https://placehold.co/400" },
        { id: 2, url: "https://placehold.co/400" },
        { id: 3, url: "https://placehold.co/400" },
      ],
    },
  ];

  return (
    <section id="projects" className=" bg-gray-100">
      <div className="container mx-auto px-4 py-40">
        <h2 className="text-3xl font-bold text-center mb-12">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                {project.images.length > 0 ? (
                  <div className="relative mb-4 h-48">
                    <img
                      src={project.images[project.coverImageIndex].url}
                      alt={project.title}
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                ) : null}

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag.id}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>

                <div className="flex justify-center gap-4">
                  <Link
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    <FaGithub /> GitHub
                  </Link>
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
