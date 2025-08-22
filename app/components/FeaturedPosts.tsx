"use client";
import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
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

type Author = {
  firstName: string;
  lastName: string;
  avatarUrl: string;
};

export type Post = {
  id: number;
  title: string;
  excerpt: string;
  coverImageIndex: number;
  tags: Tag[];
  url: string;
  images: Image[];
  slug: string;
  author: Author;
  datePublished: string;
};

const FeaturedPosts = ({ posts }: { posts: Post[] }) => {
  return (
    <section id="posts" className="bg-gray-100">
      <Container className="py-24">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Posts</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => {
            const actions: CardAction[] = [
              {
                label: "Read More",
                href: post.url,
                icon: <FaExternalLinkAlt className="text-sm" />,
                variant: "primary",
              },
            ];

            const footer = (
              <div className="flex items-center">
                <img
                  src={post.author.avatarUrl}
                  alt={`${post.author.firstName} ${post.author.lastName}`}
                  className="w-8 h-8 rounded-full mr-2"
                />
                <span className="text-sm text-gray-700">
                  {post.author.firstName} {post.author.lastName}
                </span>
                <span className="mx-2 text-gray-400">•</span>
                <span className="text-sm text-gray-500">
                  {post.datePublished}
                </span>
              </div>
            );

            return (
              <Card
                key={post.id}
                id={post.id}
                title={post.title}
                excerpt={post.excerpt}
                image={post.images[post.coverImageIndex]?.url}
                tags={post.tags}
                footer={footer}
                actions={actions}
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default FeaturedPosts;
