import React from "react";

import {
  FiCamera,
  FiSun,
  FiMoon,
  FiChevronRight,
} from "react-icons/fi";

const ProfileEditPage = () => {
  return (
    <div>
      <div className="maincontainer">

        <div className="container1">

          <div
            className="
              profileditcontainer
              w-[600px]
              min-h-[850px]
              ml-105
              mt-21
              bg-white
              rounded-xl
              shadow-lg
              px-8
              py-5
            "
          >

            {/* ================= COVER PHOTO ================= */}

            <div className="relative">

              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKzXvynRAwR0a8kGc4YCJswFM4ZR7QE-iUHGrXRc7K2uarWKmdgaplz6M&s=10"
                alt="Profile Cover"
                className="
                  w-80
                  h-50
                  object-cover
                  rounded-xl
                  left-50

                "
              />

              {/* Cover Photo Camera */}
              <button
                className="
                  absolute
                  right-55
                  bottom-1
                  w-9
                  h-9
                  rounded-full
                  bg-gray-600
                  text-white
                  flex
                  items-center
                  justify-center
                  border-2
                  border-white
                  shadow
                "
              >
                <FiCamera size={17} />
              </button>


              {/* ================= PROFILE PHOTO ================= */}

              <div
                className="
                  absolute
                  left-5
                  -bottom-[45px]
                "
              >

                <div className="relative">

                  <img
                    src="https://i.pravatar.cc/150?img=12"
                    alt="Profile"
                    className="
                      w-[105px]
                      h-[105px]
                      rounded-full
                      object-cover
                      border-4
                      border-white
                    "
                  />

                  {/* Profile Photo Camera */}
                  <button
                    className="
                      absolute
                      right-[-5px]
                      bottom-0
                      w-8
                      h-8
                      rounded-full
                      bg-gray-600
                      text-white
                      flex
                      items-center
                      justify-center
                      border-2
                      border-white
                    "
                  >
                    <FiCamera size={14} />
                  </button>

                </div>

              </div>

            </div>


            {/* ================= PROFILE INFORMATION ================= */}

            <div className="mt-[55px]">

              {/* Name */}
              <input
                type="text"
                defaultValue="Alex Rivera"
                className="
                  text-[25px]
                  text-black
                  w-[270px]
                  border-b
                  border-gray-300
                  outline-none
                  pb-1
                  bg-transparent
                "
              />


              {/* ================= BIO ================= */}

              <div className="mt-5">

                {/* Bio Label */}
                <label
                  className="
                    block
                    text-[15px]
                    text-black
                    mb-2
                  "
                >
                  Bio
                </label>

                {/* Bio Writer */}
                <textarea
                  defaultValue="Contemporary artist exploring color, texture, and abstract expression."
                  placeholder="Write something about yourself..."
                  rows="3"
                  className="
                    w-full
                    border
                    border-gray-300
                    rounded-lg
                    px-4
                    py-3
                    text-[14px]
                    text-gray-600
                    outline-none
                    resize-none
                    focus:border-gray-500
                    bg-white
                  "
                />

              </div>


              {/* ================= SETTINGS ================= */}

              <div className="mt-5">


                {/* Email */}
                <div
                  className="
                    min-h-[45px]
                    border-b
                    border-gray-200
                    flex
                    items-center
                    justify-between
                  "
                >

                  <span className="text-[15px] text-black">
                    Email
                  </span>

                  <div className="flex items-center gap-3">

                    <span className="text-[13px] text-gray-500">
                      alex.rivera@artmail.com
                    </span>

                    <button className="text-[13px] text-gray-600">
                      Change
                    </button>

                  </div>

                </div>


                {/* Password */}
                <div
                  className="
                    h-[45px]
                    border-b
                    border-gray-200
                    flex
                    items-center
                    justify-between
                  "
                >

                  <span className="text-[15px] text-black">
                    Password
                  </span>

                  <button className="text-[13px] text-gray-600">
                    Change Password
                  </button>

                </div>


                {/* Appearance */}
                <div
                  className="
                    h-[45px]
                    border-b
                    border-gray-200
                    flex
                    items-center
                    justify-between
                  "
                >

                  <span className="text-[15px] text-black">
                    Appearance
                  </span>

                  <div
                    className="
                      flex
                      items-center
                      rounded-full
                      border
                      border-gray-400
                      overflow-hidden
                    "
                  >

                    <button
                      className="
                        w-7
                        h-6
                        flex
                        items-center
                        justify-center
                        bg-gray-600
                        text-white
                      "
                    >
                      <FiSun size={14} />
                    </button>

                    <button
                      className="
                        w-7
                        h-6
                        flex
                        items-center
                        justify-center
                        text-gray-600
                      "
                    >
                      <FiMoon size={14} />
                    </button>

                  </div>

                </div>


                {/* Email Notifications */}
                <div
                  className="
                    h-[45px]
                    border-b
                    border-gray-200
                    flex
                    items-center
                    justify-between
                  "
                >

                  <span className="text-[15px] text-black">
                    Email Notifications
                  </span>

                  <div className="flex items-center gap-2">

                    <div
                      className="
                        w-8
                        h-5
                        bg-gray-500
                        rounded-full
                        p-[2px]
                        flex
                        justify-end
                      "
                    >
                      <div
                        className="
                          w-4
                          h-4
                          bg-white
                          rounded-full
                        "
                      ></div>
                    </div>

                    <span className="text-[13px]">
                      Receive email notifications
                    </span>

                  </div>

                </div>


                {/* Bookmarked Art */}
                <div
                  className="
                    h-[45px]
                    border-b
                    border-gray-200
                    flex
                    items-center
                    justify-between
                  "
                >

                  <span className="text-[15px] text-black">
                    Bookmarked Art
                  </span>

                  <button
                    className="
                      flex
                      items-center
                      gap-1
                      text-[13px]
                      text-gray-600
                    "
                  >
                    View
                    <FiChevronRight size={15} />
                  </button>

                </div>


                {/* Account Access */}
                <div
                  className="
                    h-[60px]
                    border-b
                    border-gray-200
                    flex
                    items-center
                    justify-between
                  "
                >

                  <span className="text-[15px] text-black">
                    Account Access
                  </span>

                  <button
                    className="
                      px-3
                      py-1
                      border
                      border-gray-400
                      rounded-md
                      text-[13px]
                      text-gray-600
                    "
                  >
                    Log Out
                  </button>

                </div>


                {/* Delete Account */}
                <div
                  className="
                    h-[60px]
                    border-b
                    border-gray-200
                    flex
                    items-center
                    justify-between
                  "
                >

                  <span className="text-[15px] text-red-600">
                    Delete Account
                  </span>

                  <button
                    className="
                      px-3
                      py-1
                      border
                      border-red-600
                      rounded-md
                      text-[13px]
                      text-red-600
                    "
                  >
                    Delete Account
                  </button>

                </div>


                {/* Save Changes */}
                <button
                  className="
                    w-full
                    h-[40px]
                    mt-5
                    rounded-md
                    bg-[#287f96]
                    text-white
                    text-[15px]
                    hover:bg-[#226d81]
                    transition
                  "
                >
                  Save Changes
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default ProfileEditPage;