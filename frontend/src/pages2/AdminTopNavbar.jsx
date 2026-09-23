import React from "react";

const AdminTopNavbar = () => {
  return (
    <header className="h-[68px] bg-white border-b border-gray-200 flex items-center justify-end px-8">

      <div className="flex items-center gap-3">

        {/* Profile Image */}

        <div className="h-11 w-11 rounded-full overflow-hidden bg-gray-200">

          <img
            src="https://i.pravatar.cc/100?img=12"
            alt="Admin"
            className="h-full w-full object-cover"
          />

        </div>


        {/* Welcome Text */}

        <div className="leading-tight">

          <p className="text-[16px] text-gray-600">
            Welcome,
          </p>

          <p className="text-[17px] font-semibold text-gray-900">
            Alex Johnson
          </p>

        </div>

      </div>

    </header>
  );
};

export default AdminTopNavbar;        