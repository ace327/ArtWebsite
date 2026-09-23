import React, { useState } from 'react'
import {
  FiSearch,
  FiMoreVertical,
  FiX,
  FiEye,
  FiLock,
  FiUserX,
  FiSlash,
  FiTrash2
} from "react-icons/fi";

const AdminAllUsers = () => {

  const [search, setSearch] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [openMenu, setOpenMenu] = useState(null);

  const users = [
    {
      id: 1,
      name: "Suthar Marcus Mewada",
      username: "@sutharmarcus",
      email: "suthar@example.com",
      posts: 24,
      followers: 1250,
      status: "Active",
      image: "https://i.pravatar.cc/150?img=12"
    },
    {
      id: 2,
      name: "Alex Johnson",
      username: "@alexjohnson",
      email: "alex@example.com",
      posts: 18,
      followers: 890,
      status: "Active",
      image: "https://i.pravatar.cc/150?img=13"
    },
    {
      id: 3,
      name: "Emma Williams",
      username: "@emmaw",
      email: "emma@example.com",
      posts: 31,
      followers: 2100,
      status: "Blocked",
      image: "https://i.pravatar.cc/150?img=14"
    },
    {
      id: 4,
      name: "Daniel Smith",
      username: "@danielsmith",
      email: "daniel@example.com",
      posts: 12,
      followers: 540,
      status: "Active",
      image: "https://i.pravatar.cc/150?img=15"
    }
  ];

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.username.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-[#f7f7f5] p-8">

      {/* PAGE TITLE */}

      <div className="mb-8">

        <h1 className="text-3xl font-semibold text-gray-900">
          All Users
        </h1>

        <p className="text-gray-500 mt-1">
          Manage and monitor all registered users
        </p>

      </div>


      {/* SEARCH + USER COUNT */}

      <div className="flex items-center justify-between mb-6">

        <div className="relative w-[350px]">

          <FiSearch
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />

          <input
            type="text"
            placeholder="Search users..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 bg-white outline-none focus:border-gray-400"
          />

        </div>

        <div className="text-sm text-gray-500">
          {filteredUsers.length} Users
        </div>

      </div>


      {/* USERS TABLE */}

      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">

        <table className="w-full">

          <thead className="bg-gray-50 border-b border-gray-200">

            <tr>

              <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">
                User
              </th>

              <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">
                Email
              </th>

              <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">
                Posts
              </th>

              <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">
                Followers
              </th>

              <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">
                Status
              </th>

              <th className="text-right px-6 py-4 text-sm font-medium text-gray-500">
                Action
              </th>

            </tr>

          </thead>


          <tbody>

            {filteredUsers.map((user) => (

              <tr
                key={user.id}
                className="border-b border-gray-100 last:border-none hover:bg-gray-50 transition"
              >

                {/* USER */}

                <td className="px-6 py-5">

                  <div className="flex items-center gap-3">

                    <img
                      src={user.image}
                      alt={user.name}
                      className="w-11 h-11 rounded-full object-cover"
                    />

                    <div>

                      <p className="font-medium text-gray-900">
                        {user.name}
                      </p>

                      <p className="text-sm text-gray-400">
                        {user.username}
                      </p>

                    </div>

                  </div>

                </td>


                {/* EMAIL */}

                <td className="px-6 py-5 text-sm text-gray-600">
                  {user.email}
                </td>


                {/* POSTS */}

                <td className="px-6 py-5 text-sm text-gray-600">
                  {user.posts}
                </td>


                {/* FOLLOWERS */}

                <td className="px-6 py-5 text-sm text-gray-600">
                  {user.followers}
                </td>


                {/* STATUS */}

                <td className="px-6 py-5">

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      user.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {user.status}
                  </span>

                </td>


                {/* ACTION */}

                <td className="px-6 py-5 text-right relative">

                  <button
                    onClick={() =>
                      setOpenMenu(
                        openMenu === user.id ? null : user.id
                      )
                    }
                    className="p-2 rounded-lg hover:bg-gray-100 transition"
                  >
                    <FiMoreVertical size={18} />
                  </button>


                  {openMenu === user.id && (

                    <div className="absolute right-6 top-14 w-44 bg-white border border-gray-200 rounded-xl shadow-lg z-20 overflow-hidden">

                      <button
                        onClick={() => {
                          setSelectedUser(user);
                          setOpenMenu(null);
                        }}
                        className="w-full flex items-center gap-3 px-4 py-3 text-sm hover:bg-gray-50"
                      >
                        <FiEye />
                        View Profile
                      </button>

                      <button className="w-full flex items-center gap-3 px-4 py-3 text-sm hover:bg-gray-50">
                        <FiLock />
                        Block User
                      </button>

                      <button className="w-full flex items-center gap-3 px-4 py-3 text-sm hover:bg-gray-50">
                        <FiUserX />
                        Disable User
                      </button>

                      <button className="w-full flex items-center gap-3 px-4 py-3 text-sm hover:bg-gray-50">
                        <FiSlash />
                        Suspend User
                      </button>

                      <button className="w-full flex items-center gap-3 px-4 py-3 text-sm text-red-600 hover:bg-red-50">
                        <FiTrash2 />
                        Delete User
                      </button>

                    </div>

                  )}

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>


      {/* USER PROFILE MODAL */}

      {selectedUser && (

        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">

          <div className="bg-white rounded-2xl w-[450px] p-7 relative">

            <button
              onClick={() => setSelectedUser(null)}
              className="absolute right-5 top-5 p-2 rounded-full hover:bg-gray-100"
            >
              <FiX size={20} />
            </button>


            <div className="flex flex-col items-center">

              <img
                src={selectedUser.image}
                alt={selectedUser.name}
                className="w-24 h-24 rounded-full object-cover mb-4"
              />

              <h2 className="text-xl font-semibold">
                {selectedUser.name}
              </h2>

              <p className="text-gray-400">
                {selectedUser.username}
              </p>

              <p className="text-sm text-gray-500 mt-2">
                {selectedUser.email}
              </p>

            </div>


            <div className="grid grid-cols-2 gap-4 mt-7">

              <div className="bg-gray-50 rounded-xl p-4 text-center">
                <p className="text-xl font-semibold">
                  {selectedUser.posts}
                </p>
                <p className="text-sm text-gray-400">
                  Posts
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-4 text-center">
                <p className="text-xl font-semibold">
                  {selectedUser.followers}
                </p>
                <p className="text-sm text-gray-400">
                  Followers
                </p>
              </div>

            </div>

          </div>

        </div>

      )}

    </main>
  );
};

export default AdminAllUsers;