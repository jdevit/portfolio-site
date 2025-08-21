"use client";
import Link from "next/link";
import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

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
      <div className="container mx-auto px-4 py-24">
        <h2 className="text-3xl font-bold text-center mb-12">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {project.images.length > 0 && (
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.images[project.coverImageIndex].url}
                    alt={project.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag.id}
                      className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded-full"
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center gap-4">
                  <Link
                    href={project.codeUrl}
                    className="flex-1 text-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub /> Code
                  </Link>
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition-colors flex items-center justify-center gap-2"
                  >
                    <FaExternalLinkAlt /> Demo
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
