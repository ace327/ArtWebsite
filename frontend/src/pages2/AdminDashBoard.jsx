import React from "react";

import {
  FiFileText,
  FiFlag,
  FiUsers,
  FiEye,
  FiTrash2,
  FiMoreHorizontal,
  FiUserPlus,
  FiUpload,
  FiAlertCircle,
} from "react-icons/fi";


const AdminDashBoard = () => {

  const posts = [
    {
      title: "The Title Shoes of Artworks",
      user: "AlexJohnson",
      reason: "Inappropriate Content",
      date: "Sep 18, 2026",
      image:
        "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=200",
    },

    {
      title: "The Pisaplate of Riiad",
      user: "username",
      reason: "Copyright Violation",
      date: "Sep 18, 2026",
      image:
        "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=200",
    },

    {
      title: "The century taporiinaire Art",
      user: "username",
      reason: "Copyright Violation",
      date: "Sep 18, 2026",
      image:
        "https://images.unsplash.com/photo-1549490349-8643362247b5?w=200",
    },

    {
      title: "The Modeling of Reported artworks",
      user: "AlexJohnson",
      reason: "Spam",
      date: "Sep 18, 2026",
      image:
        "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=200",
    },
  ];


  return (

    <div className="min-h-screen bg-[#f5f6f8] text-gray-900">


      {/* ================================================= */}
      {/* ================= CONTENT ======================= */}
      {/* ================================================= */}

      <section className="p-8">


        {/* ================================================= */}
        {/* PAGE HEADING */}
        {/* ================================================= */}

        <div className="mb-7">

          <h2 className="text-[30px] font-semibold tracking-tight">
            Dashboard
          </h2>

          <p className="mt-1 text-[16px] text-gray-500">
            Overview of your ArtSite platform
          </p>

        </div>



        {/* ================================================= */}
        {/* STAT CARDS */}
        {/* ================================================= */}

        <div className="grid grid-cols-4 gap-5">


          {/* ================= USERS ================= */}

          <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">

            <div className="flex items-start justify-between">

              <div>

                <p className="text-[14px] text-gray-500">
                  Total Users
                </p>

                <h3 className="mt-2 text-[28px] font-semibold">
                  1,248
                </h3>

              </div>


              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-blue-600">

                <FiUsers size={22} />

              </div>

            </div>


            <p className="mt-4 text-sm">

              <span className="font-medium text-green-600">
                +12.5%
              </span>{" "}

              <span className="text-gray-500">
                this month
              </span>

            </p>

          </div>



          {/* ================= POSTS ================= */}

          <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">

            <div className="flex items-start justify-between">

              <div>

                <p className="text-[14px] text-gray-500">
                  Total Posts
                </p>

                <h3 className="mt-2 text-[28px] font-semibold">
                  3,842
                </h3>

              </div>


              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-purple-50 text-purple-600">

                <FiFileText size={22} />

              </div>

            </div>


            <p className="mt-4 text-sm">

              <span className="font-medium text-green-600">
                +8.2%
              </span>{" "}

              <span className="text-gray-500">
                this month
              </span>

            </p>

          </div>



          {/* ================= REPORTS ================= */}

          <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">

            <div className="flex items-start justify-between">

              <div>

                <p className="text-[14px] text-gray-500">
                  Pending Reports
                </p>

                <h3 className="mt-2 text-[28px] font-semibold">
                  12
                </h3>

              </div>


              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-orange-50 text-orange-600">

                <FiFlag size={22} />

              </div>

            </div>


            <p className="mt-4 text-sm text-gray-500">
              Requires your attention
            </p>

          </div>



          {/* ================= NEW USERS ================= */}

          <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">

            <div className="flex items-start justify-between">

              <div>

                <p className="text-[14px] text-gray-500">
                  New Users
                </p>

                <h3 className="mt-2 text-[28px] font-semibold">
                  86
                </h3>

              </div>


              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-green-50 text-green-600">

                <FiUserPlus size={22} />

              </div>

            </div>


            <p className="mt-4 text-sm">

              <span className="font-medium text-green-600">
                +6.4%
              </span>{" "}

              <span className="text-gray-500">
                this week
              </span>

            </p>

          </div>


        </div>



        {/* ================================================= */}
        {/* LOWER SECTION */}
        {/* ================================================= */}

        <div className="mt-7 grid grid-cols-[1fr_330px] gap-6">


          {/* ================================================= */}
          {/* RECENT POSTS */}
          {/* ================================================= */}

          <div className="rounded-lg border border-gray-200 bg-white shadow-sm">


            {/* ================= HEADER ================= */}

            <div className="flex items-center justify-between border-b border-gray-200 px-6 py-5">

              <div>

                <h3 className="text-[19px] font-semibold">
                  Recent Posts
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  Latest artworks uploaded to ArtSite
                </p>

              </div>


              <button className="text-sm font-medium text-blue-600 hover:underline">
                View All
              </button>

            </div>



            {/* ================= TABLE ================= */}

            <div className="overflow-hidden">

              <table className="w-full">

                <thead>

                  <tr className="border-b border-gray-200 text-left text-[13px] text-gray-500">

                    <th className="px-6 py-4 font-medium">
                      Artwork
                    </th>

                    <th className="px-4 py-4 font-medium">
                      Uploader
                    </th>

                    <th className="px-4 py-4 font-medium">
                      Date
                    </th>

                    <th className="px-6 py-4 text-right font-medium">
                      Action
                    </th>

                  </tr>

                </thead>


                <tbody>

                  {posts.map((post, index) => (

                    <tr
                      key={index}
                      className="
                        border-b
                        border-gray-100
                        transition
                        hover:bg-gray-50
                      "
                    >


                      {/* ================= ARTWORK ================= */}

                      <td className="px-6 py-3">

                        <div className="flex items-center gap-3">

                          <img
                            src={post.image}
                            alt={post.title}
                            className="
                              h-[48px]
                              w-[48px]
                              rounded-md
                              object-cover
                            "
                          />

                          <div>

                            <p className="max-w-[250px] truncate text-sm font-medium">
                              {post.title}
                            </p>

                            <p className="mt-1 text-xs text-gray-400">
                              Artwork
                            </p>

                          </div>

                        </div>

                      </td>



                      {/* ================= USER ================= */}

                      <td className="px-4 py-3">

                        <span className="text-sm text-blue-600 hover:underline">
                          {post.user}
                        </span>

                      </td>



                      {/* ================= DATE ================= */}

                      <td className="px-4 py-3 text-sm text-gray-500">
                        {post.date}
                      </td>



                      {/* ================= ACTION ================= */}

                      <td className="px-6 py-3">

                        <div className="flex justify-end gap-3">


                          <button
                            className="
                              text-gray-500
                              hover:text-blue-600
                            "
                            title="View"
                          >
                            <FiEye size={18} />
                          </button>


                          <button
                            className="
                              text-gray-500
                              hover:text-red-600
                            "
                            title="Delete"
                          >
                            <FiTrash2 size={18} />
                          </button>


                          <button
                            className="
                              text-gray-500
                              hover:text-gray-900
                            "
                            title="More"
                          >
                            <FiMoreHorizontal size={19} />
                          </button>


                        </div>

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          </div>



          {/* ================================================= */}
          {/* RECENT ACTIVITY */}
          {/* ================================================= */}

          <div className="rounded-lg border border-gray-200 bg-white shadow-sm">


            {/* ================= HEADER ================= */}

            <div className="border-b border-gray-200 px-5 py-5">

              <h3 className="text-[19px] font-semibold">
                Recent Activity
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                Latest platform activity
              </p>

            </div>



            {/* ================= ACTIVITIES ================= */}

            <div className="px-5">


              {/* ================= ACTIVITY 1 ================= */}

              <div className="flex gap-3 border-b border-gray-100 py-5">

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">

                  <FiUpload size={17} />

                </div>


                <div>

                  <p className="text-sm">

                    <span className="font-medium">
                      Alex Johnson
                    </span>{" "}

                    uploaded a new artwork

                  </p>

                  <p className="mt-1 text-xs text-gray-400">
                    10 minutes ago
                  </p>

                </div>

              </div>



              {/* ================= ACTIVITY 2 ================= */}

              <div className="flex gap-3 border-b border-gray-100 py-5">

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-50 text-green-600">

                  <FiUserPlus size={17} />

                </div>


                <div>

                  <p className="text-sm">

                    New user{" "}

                    <span className="font-medium">
                      Priya Patel
                    </span>{" "}

                    joined

                  </p>

                  <p className="mt-1 text-xs text-gray-400">
                    32 minutes ago
                  </p>

                </div>

              </div>



              {/* ================= ACTIVITY 3 ================= */}

              <div className="flex gap-3 border-b border-gray-100 py-5">

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-50 text-orange-600">

                  <FiAlertCircle size={17} />

                </div>


                <div>

                  <p className="text-sm">

                    A post was reported for{" "}

                    <span className="font-medium">
                      spam
                    </span>

                  </p>

                  <p className="mt-1 text-xs text-gray-400">
                    1 hour ago
                  </p>

                </div>

              </div>



              {/* ================= ACTIVITY 4 ================= */}

              <div className="flex gap-3 py-5">

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-purple-50 text-purple-600">

                  <FiFileText size={17} />

                </div>


                <div>

                  <p className="text-sm">
                    5 new artworks were uploaded
                  </p>

                  <p className="mt-1 text-xs text-gray-400">
                    2 hours ago
                  </p>

                </div>

              </div>


            </div>

          </div>


        </div>


      </section>

    </div>

  );
};


export default AdminDashBoard;