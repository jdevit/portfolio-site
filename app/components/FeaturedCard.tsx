import React from "react";

export type CardAction = {
  label: string;
  href: string;
  icon?: React.ReactNode;
  variant?: "primary" | "secondary"; // control button colors
};

type CardProps = {
  id: string | number;
  title: string;
  description?: string;
  excerpt?: string;
  image?: string;
  tags?: { id: number | string; name: string }[];
  footer?: React.ReactNode; // custom footer (author info, etc.)
  actions?: CardAction[];
};

const Card: React.FC<CardProps> = ({
  id,
  title,
  description,
  excerpt,
  image,
  tags = [],
  footer,
  actions = [],
}) => {
  return (
    <div
      key={id}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
    >
      {image && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        {description && <p className="text-gray-600 mb-4">{description}</p>}
        {excerpt && <p className="text-gray-600 mb-4">{excerpt}</p>}

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span
                key={tag.id}
                className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded-full"
              >
                {tag.name}
              </span>
            ))}
          </div>
        )}

        {footer && <div className="mb-4">{footer}</div>}

        {actions.length > 0 && (
          <div
            className={`flex ${
              actions.length > 1 ? "justify-between gap-4" : "justify-start"
            }`}
          >
            {actions.map((action, idx) => (
              <a
                key={idx}
                href={action.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-1 text-center px-4 py-2 rounded-md font-medium transition-colors flex items-center justify-center gap-2 ${
                  action.variant === "secondary"
                    ? "bg-gray-800 text-white hover:bg-gray-900"
                    : "bg-indigo-600 text-white hover:bg-indigo-700"
                }`}
              >
                {action.icon}
                {action.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
