"use client";
import Link from "next/link";
import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

type Tag = {
  id: number;
  name: string;
};

type Image = {
  id: number;
  url: string;
};

export type Post = {
  id: number;
  title: string;
  excerpt: string;
  coverImageIndex: number;
  tags: Tag[];
  url: string;
  images: Image[];
};

const FeaturedPosts = ({ posts }: { posts: Post[] }) => {
  return (
    <section id="posts" className="bg-gray-100">
      <div className="container mx-auto px-4 py-24">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Posts</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {post.images.length > 0 && (
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.images[post.coverImageIndex].url}
                    alt={post.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag.id}
                      className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded-full"
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>

                <Link
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-800 transition-colors"
                >
                  Read More <FaExternalLinkAlt className="text-sm" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;
