import React from "react";
import { FiCamera, FiSun, FiMoon, FiChevronRight } from "react-icons/fi";

const ProfileEditPage = () => {
  return (
    <div>
      <div className="maincontainer">

        <div className="container1">

          <div className="profileditcontainer w-[378px] min-h-[640px] ml-52 bg-white rounded-xl shadow-lg px-6 py-7">

            {/* Profile Image */}
            <div className="flex flex-col items-center">

              <div className="relative">

                <img
                  src="https://i.pravatar.cc/150?img=12"
                  alt="Profile"
                  className="w-[100px] h-[100px] rounded-full object-cover"
                />

                {/* Camera Button */}
                <button
                  className="absolute bottom-0 right-0 w-8 h-8 rounded-full
                  bg-gray-600 text-white flex items-center justify-center
                  border-2 border-white"
                >
                  <FiCamera size={16} />
                </button>

              </div>

              {/* Name */}
              <input
                type="text"
                defaultValue="Alex Rivera"
                className="mt-4 text-[25px] text-center w-[260px]
                border-b border-gray-300 outline-none pb-1"
              />

            </div>


            {/* Settings */}
            <div className="mt-7">


              {/* Email */}
              <div className="h-[45px] border-b border-gray-200 flex items-center justify-between">

                <span className="text-[15px] text-black">
                  Email
                </span>

                <div className="flex items-center gap-2">
                  <span className="text-[13px] text-gray-500">
                    alex.rivera@artmail.com
                  </span>

                  <button className="text-[13px] text-gray-600">
                    Change
                  </button>
                </div>

              </div>


              {/* Password */}
              <div className="h-[45px] border-b border-gray-200 flex items-center justify-between">

                <span className="text-[15px] text-black">
                  Password
                </span>

                <button className="text-[13px] text-gray-600">
                  Change Password
                </button>

              </div>


              {/* Appearance */}
              <div className="h-[45px] border-b border-gray-200 flex items-center justify-between">

                <span className="text-[15px] text-black">
                  Appearance
                </span>

                <div className="flex items-center rounded-full border border-gray-400 overflow-hidden">

                  <button className="w-7 h-6 flex items-center justify-center bg-gray-600 text-white">
                    <FiSun size={14} />
                  </button>

                  <button className="w-7 h-6 flex items-center justify-center text-gray-600">
                    <FiMoon size={14} />
                  </button>

                </div>

              </div>


              {/* Email Notifications */}
              <div className="h-[45px] border-b border-gray-200 flex items-center justify-between">

                <span className="text-[15px] text-black">
                  Email Notifications
                </span>

                <div className="flex items-center gap-2">

                  {/* Toggle */}
                  <div className="w-8 h-5 bg-gray-500 rounded-full p-[2px] flex justify-end">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>

                  <span className="text-[13px] text-black">
                    Receive email notifications
                  </span>

                </div>

              </div>


              {/* Bookmarked Art */}
              <div className="h-[45px] border-b border-gray-200 flex items-center justify-between">

                <span className="text-[15px] text-black">
                  Bookmarked Art
                </span>

                <button className="flex items-center gap-1 text-[13px] text-gray-600">

                  View

                  <FiChevronRight size={15} />

                </button>

              </div>


              {/* Account Access */}
              <div className="h-[60px] border-b border-gray-200 flex items-center justify-between">

                <span className="text-[15px] text-black">
                  Account Access
                </span>

                <button
                  className="px-3 py-1 border border-gray-400
                  rounded-md text-[13px] text-gray-600"
                >
                  Log Out
                </button>

              </div>


              {/* Delete Account */}
              <div className="h-[60px] border-b border-gray-200 flex items-center justify-between">

                <span className="text-[15px] text-red-700">
                  Delete Account
                </span>

                <button
                  className="px-3 py-1 border border-red-700
                  rounded-md text-[13px] text-red-700"
                >
                  Delete Account
                </button>

              </div>


              {/* Save Changes */}
              <button
                className="w-full h-[37px] mt-5 rounded-md
                bg-[#287f96] text-white text-[15px]
                hover:bg-[#226d81] transition"
              >
                Save Changes
              </button>


            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default ProfileEditPage;