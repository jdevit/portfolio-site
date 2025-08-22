"use client";
import Link from "next/link";
import Container from "./Container";

export type BannerProps =
  | {
      title: string;
      lead: string;
      actionText: string;
      href: string;
      onClick?: never;
    }
  | {
      title: string;
      lead: string;
      actionText: string;
      onClick: () => void;
      href?: never;
    };

const Banner = ({ title, lead, actionText, href, onClick }: BannerProps) => {
  const actionClasses =
    "duration-200 hover:bg-teal-600 bg-teal-500 px-6 py-3 rounded-md font-semibold text-xl md:text-2xl shadow-lg mt-6 inline-block";

  return (
    <div className="relative overflow-hidden text-white">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-indigo-700 to-indigo-800 animate-gradient" />

      {/* Optional overlay for readability */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />

      <Container className="relative px-6 py-16 md:py-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-3 drop-shadow-sm">
              {title}
            </h2>
            <p className="opacity-90 text-lg mb-6">{lead}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              {href ? (
                <Link href={href} className={actionClasses}>
                  {actionText}
                </Link>
              ) : (
                <button onClick={onClick} className={actionClasses}>
                  {actionText}
                </button>
              )}
            </div>
          </div>
        </div>
      </Container>

      {/* Gradient animation keyframes */}
      <style jsx>{`
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientShift 12s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default Banner;
