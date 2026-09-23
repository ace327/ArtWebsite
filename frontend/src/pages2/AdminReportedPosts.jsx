import React, { useState } from "react";

import {
  FiEye,
  FiTrash2,
  FiMinusCircle,
  FiChevronDown,
} from "react-icons/fi";

const AdminReportedPosts = () => {

  const [filterReason, setFilterReason] = useState("All");


  // =================================================
  // REPORTED POSTS DATA
  // =================================================

  const reportedPosts = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=100",
      title: "The title Shoes of Artworks",
      uploader: "AlexJohnson",
      reason: "Inappropriate Content",
      date: "Sep 18, 2026",
    },

    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1577083552431-6e5fd01988b5?w=100",
      title: "The Pisaplate of Riiad",
      uploader: "username",
      reason: "Copyright Violation",
      date: "Sep 18, 2026",
    },

    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1549490349-8643362247b5?w=100",
      title: "The contury taporiiare Art",
      uploader: "username",
      reason: "Copyright Violation",
      date: "Sep 18, 2026",
    },

    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?w=100",
      title: "The Modeling of Reported artworks",
      uploader: "AlexJohnson",
      reason: "Spam",
      date: "Sep 18, 2026",
    },

    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=100",
      title: "Design in Rorcy",
      uploader: "username",
      reason: "Inappropriate Content",
      date: "Sep 18, 2026",
    },

    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=100",
      title: "The Fmly and tIpr Design",
      uploader: "username",
      reason: "Copyright Violation",
      date: "Sep 18, 2026",
    },

    {
      id: 7,
      image:
        "https://images.unsplash.com/photo-1577083552431-6e5fd01988b5?w=100",
      title: "The retaly cand sriioe title",
      uploader: "alexJohnson",
      reason: "Copyright Violation",
      date: "Sep 18, 2026",
    },

    {
      id: 8,
      image:
        "https://images.unsplash.com/photo-1577083288073-40892c0860a4?w=100",
      title: "Repoits the end of Art",
      uploader: "username",
      reason: "Spam",
      date: "Sep 18, 2026",
    },
  ];


  // =================================================
  // FILTER
  // =================================================

  const filteredPosts =
    filterReason === "All"
      ? reportedPosts
      : reportedPosts.filter(
          (post) => post.reason === filterReason
        );


  // =================================================
  // REASON STYLE
  // =================================================

  const getReasonStyle = (reason) => {

    if (reason === "Inappropriate Content") {
      return "bg-orange-200 text-gray-900";
    }

    if (reason === "Copyright Violation") {
      return "bg-purple-200 text-gray-900";
    }

    if (reason === "Spam") {
      return "bg-yellow-200 text-gray-900";
    }

    return "bg-gray-200 text-gray-900";
  };


  // =================================================
  // ACTIONS
  // =================================================

  const handleView = (post) => {
    console.log("Viewing post:", post);
  };


  const handleDelete = (post) => {
    console.log("Delete post:", post);
  };


  const handleDismiss = (post) => {
    console.log("Dismiss report:", post);
  };


  // =================================================
  // PAGE
  // =================================================

  return (

    <div className="min-h-screen w-full bg-[#f8fafc]">


      {/* ================================================= */}
      {/* PAGE CONTENT */}
      {/* ================================================= */}

      <section className="px-8 py-8">


        {/* ================================================= */}
        {/* HEADING + FILTER */}
        {/* ================================================= */}

        <div className="flex items-start justify-between mb-5">


          {/* ================= HEADING ================= */}

          <div>

            <h2 className="text-[32px] font-semibold text-gray-900 leading-tight">
              Reported Posts
            </h2>

            <p className="text-[17px] text-gray-600 mt-1">
              12 posts pending review
            </p>

          </div>


          {/* ================= FILTER ================= */}

          <div className="w-[185px]">

            <label className="block text-[16px] text-gray-900 mb-1">
              Filter by Reason
            </label>

            <div className="relative">

              <select
                value={filterReason}
                onChange={(e) =>
                  setFilterReason(e.target.value)
                }
                className="
                  appearance-none
                  w-full
                  h-[38px]
                  px-3
                  pr-10
                  rounded-lg
                  border
                  border-gray-300
                  bg-white
                  text-[16px]
                  text-gray-800
                  outline-none
                  focus:border-blue-500
                  cursor-pointer
                "
              >

                <option value="All">
                  All
                </option>

                <option value="Inappropriate Content">
                  Inappropriate Content
                </option>

                <option value="Copyright Violation">
                  Copyright Violation
                </option>

                <option value="Spam">
                  Spam
                </option>

              </select>


              <FiChevronDown
                className="
                  absolute
                  right-3
                  top-1/2
                  -translate-y-1/2
                  pointer-events-none
                  text-gray-500
                "
              />

            </div>

          </div>

        </div>



        {/* ================================================= */}
        {/* TABLE CONTAINER */}
        {/* ================================================= */}

        <div
          className="
            bg-white
            rounded-xl
            border
            border-gray-200
            shadow-sm
            overflow-hidden
          "
        >


          {/* ================================================= */}
          {/* TABLE HEADER */}
          {/* ================================================= */}

          <div
            className="
              grid
              grid-cols-[108px_1.7fr_1fr_1.2fr_1fr_225px]
              items-center
              px-5
              h-[54px]
              border-b
              border-gray-300
              text-[16px]
              font-semibold
              text-gray-900
            "
          >

            <div>
              Thumbnail
            </div>

            <div>
              Title
            </div>

            <div>
              Uploader
            </div>

            <div>
              Reason
            </div>

            <div>
              Date Reported
            </div>

            <div>
              Actions
            </div>

          </div>



          {/* ================================================= */}
          {/* TABLE ROWS */}
          {/* ================================================= */}

          {filteredPosts.map((post, index) => (

            <div
              key={post.id}
              className={`
                grid
                grid-cols-[108px_1.7fr_1fr_1.2fr_1fr_225px]
                items-center
                min-h-[59px]
                px-5
                border-b
                border-gray-300
                text-[16px]

                ${
                  index % 2 === 1
                    ? "bg-gray-100"
                    : "bg-white"
                }

                hover:bg-gray-50
                transition
              `}
            >


              {/* ================= THUMBNAIL ================= */}

              <div>

                <img
                  src={post.image}
                  alt={post.title}
                  className="
                    w-[45px]
                    h-[45px]
                    rounded-lg
                    object-cover
                  "
                />

              </div>



              {/* ================= TITLE ================= */}

              <div className="pr-4 text-gray-900">

                {post.title}

              </div>



              {/* ================= UPLOADER ================= */}

              <div>

                <button
                  className="
                    text-[#28689e]
                    underline
                    hover:text-blue-700
                    cursor-pointer
                  "
                >

                  {post.uploader}

                </button>

              </div>



              {/* ================= REASON ================= */}

              <div>

                <span
                  className={`
                    inline-flex
                    items-center
                    px-3
                    py-1
                    rounded-lg
                    text-[14px]
                    whitespace-nowrap
                    ${getReasonStyle(post.reason)}
                  `}
                >

                  {post.reason}

                </span>

              </div>



              {/* ================= DATE ================= */}

              <div className="text-gray-900">

                {post.date}

              </div>



              {/* ================= ACTIONS ================= */}

              <div className="flex items-center gap-5">


                {/* ================= VIEW ================= */}

                <button
                  onClick={() => handleView(post)}
                  className="
                    flex
                    flex-col
                    items-center
                    justify-center
                    text-gray-700
                    hover:text-black
                    transition
                    cursor-pointer
                  "
                >

                  <FiEye
                    className="w-[21px] h-[21px]"
                  />

                  <span className="text-[14px]">
                    View
                  </span>

                </button>



                {/* ================= DELETE ================= */}

                <button
                  onClick={() => handleDelete(post)}
                  className="
                    flex
                    flex-col
                    items-center
                    justify-center
                    text-[#991b1b]
                    hover:text-red-700
                    transition
                    cursor-pointer
                  "
                >

                  <FiTrash2
                    className="w-[20px] h-[20px]"
                  />

                  <span
                    className="
                      text-[14px]
                      whitespace-nowrap
                    "
                  >
                    Delete Post
                  </span>

                </button>



                {/* ================= DISMISS ================= */}

                <button
                  onClick={() => handleDismiss(post)}
                  className="
                    flex
                    flex-col
                    items-center
                    justify-center
                    text-gray-600
                    hover:text-gray-900
                    transition
                    cursor-pointer
                  "
                >

                  <FiMinusCircle
                    className="w-[20px] h-[20px]"
                  />

                  <span className="text-[14px]">
                    Dismiss
                  </span>

                </button>


              </div>

            </div>

          ))}



          {/* ================================================= */}
          {/* PAGINATION */}
          {/* ================================================= */}

          <div
            className="
              h-[55px]
              flex
              items-center
              justify-center
              gap-4
              text-gray-600
            "
          >

            <button
              className="
                hover:text-black
                cursor-pointer
                transition
              "
            >
              Previous
            </button>


            <span className="text-gray-400">
              |
            </span>


            <button className="text-black font-medium">
              1
            </button>


            <button className="hover:text-black cursor-pointer">
              2
            </button>


            <button className="hover:text-black cursor-pointer">
              3
            </button>


            <span className="text-gray-400">
              |
            </span>


            <button className="hover:text-black cursor-pointer">
              Next
            </button>

          </div>


        </div>

      </section>

    </div>

  );
};


export default AdminReportedPosts;