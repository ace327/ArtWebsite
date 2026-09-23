import React from "react";
import { NavLink } from "react-router-dom";

import {
  FiHome,
  FiFileText,
  FiFlag,
  FiUsers,
} from "react-icons/fi";

const AdminSidebar = () => {
  return (
    <aside className="fixed left-0 top-0 w-[245px] h-screen bg-gradient-to-b from-[#292f35] to-[#20252a] text-white">

      {/* ================= LOGO ================= */}

      <div className="h-[68px] flex items-center px-6 border-b border-white/10">
        <h1 className="text-[25px] font-semibold">
          ArtSite Admin
        </h1>
      </div>


      {/* ================= MENU ================= */}

      <nav className="px-3 py-6 space-y-2">

        {/* Dashboard */}

        <NavLink
          to="/AdminDashBoard"
          className={({ isActive }) =>
            `flex items-center gap-4 px-4 py-3 rounded-lg transition
            ${
              isActive
                ? "bg-[#3478d8] text-white"
                : "text-gray-200 hover:bg-white/10"
            }`
          }
        >
          <FiHome className="w-5 h-5" />

          <span className="text-[17px]">
            Dashboard
          </span>
        </NavLink>


        {/* All Posts */}

        <NavLink
          to="/AllPosts"
          className={({ isActive }) =>
            `flex items-center gap-4 px-4 py-3 rounded-lg transition
            ${
              isActive
                ? "bg-[#3478d8] text-white"
                : "text-gray-200 hover:bg-white/10"
            }`
          }
        >
          <FiFileText className="w-5 h-5" />

          <span className="text-[17px]">
            All Posts
          </span>
        </NavLink>


        {/* Reported Posts */}

        <NavLink
          to="/AdminReportedPosts"
          className={({ isActive }) =>
            `flex items-center gap-4 px-4 py-3 rounded-lg transition
            ${
              isActive
                ? "bg-[#3478d8] text-white"
                : "text-gray-200 hover:bg-white/10"
            }`
          }
        >
          <FiFlag className="w-5 h-5" />

          <span className="text-[17px]">
            Reported Posts
          </span>
        </NavLink>


        {/* Users */}

        <NavLink
          to="/AdminAllUsers"
          className={({ isActive }) =>
            `flex items-center gap-4 px-4 py-3 rounded-lg transition
            ${
              isActive
                ? "bg-[#3478d8] text-white"
                : "text-gray-200 hover:bg-white/10"
            }`
          }
        >
          <FiUsers className="w-5 h-5" />

          <span className="text-[17px]">
            Users
          </span>
        </NavLink>

      </nav>

    </aside>
  );
};

export default AdminSidebar;