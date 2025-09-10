"use client";

import { useState } from "react";
import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`fixed top-0 left-0 h-full bg-gray-100 border-r transition-all duration-300
      ${collapsed ? "w-16" : "w-2/5"} p-4 flex flex-col items-center`}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute top-4 right-[-12px] bg-gray-200 border rounded-full p-1 shadow"
      >
        {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
      </button>

      {!collapsed && (
        <div className="text-center space-y-4 mt-12">
          <h1 className="text-2xl font-bold">Giordan Andrew</h1>
          <h2 className="text-lg text-gray-600">Software Developer</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            A short bio goes here. Passionate about building web experiences and
            solving problems with code.
          </p>

          {/* Placeholder for user image */}
          <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mt-6" />

          {/* Social icons */}
          <div className="flex justify-center space-x-4 mt-6">
            <a href="#" aria-label="Instagram">
              <Instagram />
            </a>
            <a href="#" aria-label="GitHub">
              <Github />
            </a>
            <a href="#" aria-label="LinkedIn">
              <Linkedin />
            </a>
            <a href="mailto:test@example.com" aria-label="Email">
              <Mail />
            </a>
          </div>
        </div>
      )}
    </aside>
  );
}
