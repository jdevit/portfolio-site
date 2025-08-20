"use client";
import { useState } from "react";
import { IconType } from "react-icons";
import Container from "./Container";
import {
  FaAws,
  FaDocker,
  FaLinux,
  FaNetworkWired,
  FaCode,
  FaReact,
  FaDatabase,
  FaLock,
  FaTools,
} from "react-icons/fa";

interface SkillCategoryProps {
  icon: IconType;
  title: string;
  items: string[];
}

const SkillCategory = ({ icon, title, items }: SkillCategoryProps) => {
  const Icon = icon;
  return (
    <div className="shadow-md p-6 rounded-md border border-gray-200 bg-white">
      <h3 className="flex items-center text-2xl font-semibold text-gray-800 mb-6">
        <span className="mr-3 text-blue-600 text-2xl">
          <Icon />
        </span>
        {title}
      </h3>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default function SkillsSection() {
  const categories: SkillCategoryProps[] = [
    {
      icon: FaAws,
      title: "Cloud & Infrastructure",
      items: [
        "AWS (SAA Certified): EC2, S3, IAM, VPCs, EBS, EFS, CloudWatch, Lambda, API Gateway, CloudFront, Route 53, ECS",
        "Docker (CLI and Compose for multi-service setups)",
        "Terraform (learning)",
      ],
    },
    {
      icon: FaLinux,
      title: "Linux & System Administration",
      items: [
        "Systemd (systemctl, journalctl, service management)",
        "User & group management (permissions, ACLs, sudoers)",
        "Storage: LVM, partitions, mounting, file systems",
        "Package management (Debian & RHEL flavors)",
        "Kernel & runtime parameters (process niceness, priorities, sysctl tuning)",
      ],
    },
    {
      icon: FaNetworkWired,
      title: "Networking",
      items: [
        "Firewall configuration (UFW, firewall-cmd, routers)",
        "Port forwarding & DMZ",
        "TCP/IP fundamentals",
        "Packet capture & analysis (tcpdump, familiar with Wireshark)",
        "VPNs (L2TP/IPsec)",
        "Router configuration (MikroTik, EdgeRouter)",
      ],
    },
    {
      icon: FaCode,
      title: "Programming, Scripting & Automation",
      items: [
        "Bash scripting",
        "Python (learning, used for automation)",
        "Ansible (basics)",
      ],
    },
    {
      icon: FaReact,
      title: "Web Development",
      items: [
        "HTML, CSS, TailwindCSS",
        "JavaScript/TypeScript",
        "React (frontend)",
        "Node.js & Express (backend)",
      ],
    },
    {
      icon: FaTools,
      title: "Monitoring & Observability",
      items: [
        "Log file analysis & troubleshooting",
        "Metrics collection (CloudWatch)",
        "Log rotation & management (logrotate, Pino)",
        "Troubleshooting tools: top, htop, dstat, iotop",
      ],
    },
    {
      icon: FaLock,
      title: "Security",
      items: [
        "IAM policies & least privilege",
        "SSL/TLS (AWS Certificate Manager, Nginx/Apache basics)",
        "SSH & SSH tunnels, key management",
        "Firewall rules (iptables/nftables, AWS Security Groups)",
      ],
    },
    {
      icon: FaDatabase,
      title: "Databases",
      items: [
        "MySQL (design, queries, indexing, EXPLAIN, backups)",
        "DynamoDB (basics)",
        "MongoDB (basics)",
      ],
    },
    {
      icon: FaTools,
      title: "Tools & Collaboration",
      items: [
        "Git/GitHub (branching, pull requests, workflows)",
        "Remote desktop & remote support tools",
        "Writing knowledge base articles & documentation",
      ],
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section id="skills">
      <Container>
        <h2 className="text-3xl font-bold text-center mb-10 mt-20">Skills</h2>
        <div className="pb-20 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Left column for tabs */}
          <div className="space-y-2 border-r pr-4">
            {categories.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedIndex(idx)}
                  className={`flex cursor-pointer items-center w-full px-3 py-2 rounded-md text-left transition-colors ${
                    selectedIndex === idx
                      ? "bg-blue-100 text-blue-700 font-semibold"
                      : "hover:bg-gray-100 text-gray-700"
                  }`}
                >
                  <Icon className="mr-2" />
                  {cat.title}
                </button>
              );
            })}
          </div>

          {/* Right column for details */}
          <div className="md:col-span-3">
            <SkillCategory {...categories[selectedIndex]} />
          </div>
        </div>
      </Container>
    </section>
  );
}
