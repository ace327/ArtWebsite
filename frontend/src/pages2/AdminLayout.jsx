import React from "react";
import { Outlet } from "react-router-dom";

import AdminSidebar from "./AdminSidebar";
import AdminTopNavbar from "./AdminTopNavbar";

const AdminLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* ================= SIDEBAR ================= */}

      <AdminSidebar />


      {/* ================= RIGHT SIDE ================= */}

      <div className="ml-[245px] min-h-screen">

        {/* ================= TOP NAVBAR ================= */}

        <AdminTopNavbar />


        {/* ================= PAGE CONTENT ================= */}

        <main>
          <Outlet />
        </main>

      </div>

    </div>
  );
};

export default AdminLayout;