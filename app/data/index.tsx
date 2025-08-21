import { AboutProps } from "../components/About";
import { BannerProps } from "../components/Banner";
import { Post } from "../components/FeaturedPosts";
import { Project } from "../components/FeaturedProjects";
import { FooterProps } from "../components/Footer";
import { HeroProps } from "../components/Hero";
import { NavItemProps } from "../components/NavItem";
import { SkillCategory } from "../components/Skills";
import {
  FaLinux,
  FaNetworkWired,
  FaCode,
  FaDatabase,
  FaCloud,
  FaShieldAlt,
  FaTools,
} from "react-icons/fa";

export const mockAboutData: AboutProps = {
  title: "About Me",
  imageSrc: "profile.png",
  imageAlt: "Jeremy Barber",
  paragraphs: [
    'I’m <span className="font-semibold">Jeremy Barber</span>, a Cloud Engineer and Full-Stack Developer with 4+ years of experience supporting hybrid on-prem and cloud environments. I specialize in designing scalable AWS architectures, automating workflows with Bash, Python, and Node.js, and troubleshooting complex networking and Linux system issues.',
    "Beyond infrastructure, I enjoy building modern web applications with React and Node.js, bridging the gap between cloud systems and user-facing tools. My work blends hands-on technical support, automation scripting, and development to deliver reliable, efficient solutions.",
    "AWS Solutions Architect – Associate certified, I’m actively building and deploying projects that showcase cloud-native design, security best practices, and practical problem solving.",
  ],
};
export const mockBannerData: BannerProps = {
  title: "Let's Build Scalable, Secure Cloud Solutions Together!",
  lead: "I'm a cloud engineer passionate about designing and implementing robust, scalable infrastructure solutions. Let's discuss how we can optimize your systems for performance and security.",
  actionText: "Hire Me",
  href: "/contact",
};
export const mockPostsData: Post[] = [
  {
    id: 1,
    coverImageIndex: 0,
    title: "Scaling Node.js APIs on AWS",
    excerpt:
      "Learn best practices for deploying and scaling Node.js APIs using AWS services like ECS, Lambda, and API Gateway.",
    tags: [
      { id: 1, name: "Node.js" },
      { id: 2, name: "AWS" },
      { id: 3, name: "Scalability" },
    ],
    url: "https://placehold.co/400",
    images: [{ id: 1, url: "https://placehold.co/400" }],
  },
  {
    id: 2,
    coverImageIndex: 0,
    title: "Mastering React State Management",
    excerpt:
      "A breakdown of React state management strategies including Context API, Redux Toolkit, and Zustand.",
    tags: [
      { id: 1, name: "React" },
      { id: 2, name: "Redux" },
      { id: 3, name: "Zustand" },
    ],
    url: "https://placehold.co/400",
    images: [{ id: 1, url: "https://placehold.co/400" }],
  },
  {
    id: 3,
    coverImageIndex: 0,
    title: "Optimizing SQL Queries for Performance",
    excerpt:
      "Explore indexing, query optimization techniques, and practical strategies to improve SQL performance.",
    tags: [
      { id: 1, name: "SQL" },
      { id: 2, name: "MySQL" },
      { id: 3, name: "Database" },
    ],
    url: "https://placehold.co/400",
    images: [{ id: 1, url: "https://placehold.co/400" }],
  },
];
export const mockProjectsData: Project[] = [
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
    images: [{ id: 1, url: "https://placehold.co/400" }],
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
    images: [{ id: 1, url: "https://placehold.co/400" }],
  },
];

export const mockFooterData: FooterProps["footerData"] = {
  brand: {
    name: "Jeremy Barber",
    description:
      "Cloud Engineer & Full-Stack Developer. Designing scalable cloud solutions, automation workflows, and building modern web applications. AWS Solutions Architect - Associate certified.",
  },
  quickLinks: [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/posts", label: "Posts" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
  contact: [
    {
      href: "mailto:jeremydanielbarber@gmail.com",
      label: "jeremydanielbarber@gmail.com",
    },
    {
      href: "https://linkedin.com/in/jeremy-bar",
      label: "LinkedIn",
      external: true,
    },
    { href: "https://github.com/yourgithub", label: "GitHub", external: true },
  ],
  copyright: "Jeremy Barber. All rights reserved.",
};

export const mockHeroData: HeroProps = {
  title: "Cloud Engineer | Automation & Full-Stack Solutions",
  description:
    "I design and troubleshoot Linux and networking systems, streamline operations with automation scripting in Bash, Python, and Node.js, and build light full-stack tools with Node.js and React to support cloud-first solutions.",
  buttonText: "Hire Me",
  buttonLink: "/contact",
};
export const navItems: NavItemProps[] = [
  { type: "link", label: "Home", path: "/" },
  { type: "link", label: "About", path: "/#about" },
  { type: "link", label: "Posts", path: "/posts" },
  { type: "link", label: "Projects", path: "/#projects" },
  { type: "link", label: "Contact", path: "/contact" },
  {
    type: "button",
    label: "Admin",
    onClick: () => {},
  },
];

export const skillCategories: SkillCategory[] = [
  {
    id: 1,
    name: "Cloud & Infrastructure",
    icon: <FaCloud />,
    skills: [
      "AWS (SAA Certified): EC2, S3, IAM, VPCs, EBS, EFS, CloudWatch, Lambda, API Gateway, CloudFront, RDS, ECS",
      "Docker (CLI & Compose for multi-service apps)",
      "Terraform (learning)",
    ],
  },
  {
    id: 2,
    name: "Linux & System Administration",
    icon: <FaLinux />,
    skills: [
      "Debian, RHEL, systemctl, cron jobs",
      "SSH hardening, firewalls, VPN (L2TP/IPsec)",
      "tcpdump, netcat, fail2ban",
    ],
  },
  {
    id: 3,
    name: "Networking",
    icon: <FaNetworkWired />,
    skills: [
      "MikroTik, EdgeRouter, Cisco",
      "Port forwarding, DMZ, VLANs",
      "Bridging, NAT, VPN configuration",
    ],
  },
  {
    id: 4,
    name: "Programming & Scripting",
    icon: <FaCode />,
    skills: [
      "Bash scripting",
      "Python (automation, tooling)",
      "JavaScript/TypeScript (Node.js, Express.js, React)",
    ],
  },
  {
    id: 5,
    name: "Databases",
    icon: <FaDatabase />,
    skills: [
      "MySQL, SQL Server, MongoDB (basics), DynamoDB (basics)",
      "Schema design, indexing, query optimization",
    ],
  },
  {
    id: 6,
    name: "Security",
    icon: <FaShieldAlt />,
    skills: [
      "SSL/TLS, certbot, reverse proxy setup",
      "Authentication & RBAC",
      "Monitoring & alerting best practices",
    ],
  },
  {
    id: 7,
    name: "Tools & Collaboration",
    icon: <FaTools />,
    skills: [
      "Git & GitHub",
      "CI/CD with GitHub Actions",
      "Agile workflows & documentation",
    ],
  },
];
