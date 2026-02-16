"use client";

import { motion } from "framer-motion";
import { FaFutbol, FaChild, FaMusic } from "react-icons/fa";

interface ProgramCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  ageGroup: string;
  cta: string;
  link: string;
}

export default function ProgramCard({
  title,
  description,
  icon,
  ageGroup,
  cta,
  link,
}: ProgramCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow p-8 border-t-4 border-blue-900"
    >
      <div className="text-5xl text-blue-900 mb-4">{icon}</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-blue-900 text-sm font-semibold mb-4">
        Ages: {ageGroup}
      </p>
      <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-blue-900 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
      >
        {cta}
      </a>
    </motion.div>
  );
}
