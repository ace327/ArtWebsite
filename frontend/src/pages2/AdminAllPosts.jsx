import React, { useState } from "react";

import {
  FiSearch,
  FiEye,
  FiTrash2,
  FiChevronDown,
} from "react-icons/fi";


const AdminAllPosts = () => {

  // =================================================
  // ================= FILTER STATES ==================
  // =================================================

  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("All");

  const [medium, setMedium] = useState("All");

  const [nsfw, setNsfw] = useState("All");


  // =================================================
  // ================= POSTS DATA =====================
  // =================================================

  const posts = [
    {
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=200",
      title: "Serenity Peaks",
      uploader: "Alex Johnson",
      category: "Landscape Art",
      medium: "Digital",
      date: "Sep 15, 2026",
      nsfw: "No",
    },

    {
      image:
        "https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=200",
      title: "Cosmic Chaos",
      uploader: "Alex Johnson",
      category: "Abstract",
      medium: "Mixed Media",
      date: "Sep 14, 2026",
      nsfw: "Yes",
    },

    {
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200",
      title: "Crimson Siren",
      uploader: "Crimson",
      category: "Portraits",
      medium: "Digital",
      date: "Sep 13, 2026",
      nsfw: "No",
    },

    {
      image:
        "https://images.unsplash.com/photo-1551085254-e96b210db58a?w=200",
      title: "Majestic Eagle",
      uploader: "Alex Johnson",
      category: "Wildlife",
      medium: "Digital",
      date: "Sep 12, 2026",
      nsfw: "No",
    },

    {
      image:
        "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=200",
      title: "Sunlit Bloom",
      uploader: "Alex Johnson",
      category: "Flowers",
      medium: "Watercolor",
      date: "Sep 11, 2026",
      nsfw: "No",
    },

    {
      image:
        "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=200",
      title: "Silent Mountains",
      uploader: "David Art",
      category: "Mountains",
      medium: "Oil Paint",
      date: "Sep 10, 2026",
      nsfw: "No",
    },

    {
      image:
        "https://images.unsplash.com/photo-1549490349-8643362247b5?w=200",
      title: "Fragments of Color",
      uploader: "Maya",
      category: "Abstract",
      medium: "Charcoal",
      date: "Sep 09, 2026",
      nsfw: "No",
    },
  ];


  // =================================================
  // ================= FILTER OPTIONS =================
  // =================================================

  const categories = [
    "All",
    "Flowers",
    "Mountains",
    "Portraits",
    "Abstract",
    "Wildlife",
    "Landscape Art",
    "Other",
  ];


  const mediums = [
    "All",
    "Digital",
    "Pencil",
    "Watercolor",
    "Oil Paint",
    "Charcoal",
    "Mixed Media",
    "Other",
  ];


  const nsfwOptions = [
    "All",
    "Yes",
    "No",
  ];


  // =================================================
  // ================= FILTER LOGIC ===================
  // =================================================

  const filteredPosts = posts.filter((post) => {

    const searchValue = search.toLowerCase();

    const matchesSearch =
      post.title.toLowerCase().includes(searchValue) ||
      post.uploader.toLowerCase().includes(searchValue);


    const matchesCategory =
      category === "All" ||
      post.category === category;


    const matchesMedium =
      medium === "All" ||
      post.medium === medium;


    const matchesNsfw =
      nsfw === "All" ||
      post.nsfw === nsfw;


    return (
      matchesSearch &&
      matchesCategory &&
      matchesMedium &&
      matchesNsfw
    );
  });


  return (

    <div className="min-h-screen bg-[#f5f6f8] text-gray-900">

      {/* ================================================= */}
      {/* ================= PAGE CONTENT ================== */}
      {/* ================================================= */}

      <main className="min-h-screen">

        <section className="p-8">


          {/* ================= TITLE ================= */}

          <div className="mb-6">

            <h2 className="text-[30px] font-semibold tracking-tight">
              All Posts
            </h2>

            <p className="mt-1 text-[16px] text-gray-500">
              85,321 total posts
            </p>

          </div>



          {/* ================================================= */}
          {/* ================= FILTER BAR ==================== */}
          {/* ================================================= */}

          <div className="mb-6 grid grid-cols-[1.4fr_1fr_1fr_0.8fr] gap-4">


            {/* ================= SEARCH ================= */}

            <div className="relative">

              <FiSearch
                size={19}
                className="
                  absolute
                  left-3
                  top-1/2
                  -translate-y-1/2
                  text-gray-400
                "
              />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by title or username..."
                className="
                  h-[40px]
                  w-full
                  rounded-md
                  border
                  border-gray-300
                  bg-white
                  pl-10
                  pr-4
                  text-[15px]
                  outline-none
                  transition
                  focus:border-blue-500
                  focus:ring-1
                  focus:ring-blue-500
                "
              />

            </div>



            {/* ================= CATEGORY ================= */}

            <div>

              <label className="mb-1 block text-[14px]">
                Category
              </label>

              <div className="relative">

                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="
                    h-[40px]
                    w-full
                    appearance-none
                    rounded-md
                    border
                    border-gray-300
                    bg-white
                    px-3
                    text-[15px]
                    outline-none
                    focus:border-blue-500
                    focus:ring-1
                    focus:ring-blue-500
                  "
                >

                  {categories.map((item) => (

                    <option
                      key={item}
                      value={item}
                    >
                      {item}
                    </option>

                  ))}

                </select>

                <FiChevronDown
                  size={17}
                  className="
                    pointer-events-none
                    absolute
                    right-3
                    top-1/2
                    -translate-y-1/2
                    text-gray-500
                  "
                />

              </div>

            </div>



            {/* ================= MEDIUM ================= */}

            <div>

              <label className="mb-1 block text-[14px]">
                Medium
              </label>

              <div className="relative">

                <select
                  value={medium}
                  onChange={(e) => setMedium(e.target.value)}
                  className="
                    h-[40px]
                    w-full
                    appearance-none
                    rounded-md
                    border
                    border-gray-300
                    bg-white
                    px-3
                    text-[15px]
                    outline-none
                    focus:border-blue-500
                    focus:ring-1
                    focus:ring-blue-500
                  "
                >

                  {mediums.map((item) => (

                    <option
                      key={item}
                      value={item}
                    >
                      {item}
                    </option>

                  ))}

                </select>

                <FiChevronDown
                  size={17}
                  className="
                    pointer-events-none
                    absolute
                    right-3
                    top-1/2
                    -translate-y-1/2
                    text-gray-500
                  "
                />

              </div>

            </div>



            {/* ================= NSFW ================= */}

            <div>

              <label className="mb-1 block text-[14px]">
                NSFW
              </label>

              <div className="relative">

                <select
                  value={nsfw}
                  onChange={(e) => setNsfw(e.target.value)}
                  className="
                    h-[40px]
                    w-full
                    appearance-none
                    rounded-md
                    border
                    border-gray-300
                    bg-white
                    px-3
                    text-[15px]
                    outline-none
                    focus:border-blue-500
                    focus:ring-1
                    focus:ring-blue-500
                  "
                >

                  {nsfwOptions.map((item) => (

                    <option
                      key={item}
                      value={item}
                    >
                      {item}
                    </option>

                  ))}

                </select>

                <FiChevronDown
                  size={17}
                  className="
                    pointer-events-none
                    absolute
                    right-3
                    top-1/2
                    -translate-y-1/2
                    text-gray-500
                  "
                />

              </div>

            </div>

          </div>



          {/* ================================================= */}
          {/* ================= POSTS TABLE =================== */}
          {/* ================================================= */}

          <div
            className="
              overflow-hidden
              rounded-lg
              border
              border-gray-200
              bg-white
              shadow-sm
            "
          >

            <div className="overflow-x-auto">

              <table className="w-full min-w-[1050px]">

                {/* ================= TABLE HEADER ================= */}

                <thead>

                  <tr
                    className="
                      border-b
                      border-gray-200
                      text-left
                    "
                  >

                    <th className="px-5 py-4 text-[15px] font-semibold">
                      Thumbnail
                    </th>

                    <th className="px-4 py-4 text-[15px] font-semibold">
                      Title
                    </th>

                    <th className="px-4 py-4 text-[15px] font-semibold">
                      Uploader
                    </th>

                    <th className="px-4 py-4 text-[15px] font-semibold">
                      Category
                    </th>

                    <th className="px-4 py-4 text-[15px] font-semibold">
                      Date
                    </th>

                    <th className="px-4 py-4 text-[15px] font-semibold">
                      NSFW
                    </th>

                    <th className="px-5 py-4 text-right text-[15px] font-semibold">
                      Actions
                    </th>

                  </tr>

                </thead>


                {/* ================= TABLE BODY ================= */}

                <tbody>

                  {filteredPosts.map((post, index) => (

                    <tr
                      key={index}
                      className="
                        border-b
                        border-gray-200
                        transition
                        hover:bg-gray-50
                      "
                    >

                      {/* Thumbnail */}

                      <td className="px-5 py-3">

                        <img
                          src={post.image}
                          alt={post.title}
                          className="
                            h-[45px]
                            w-[45px]
                            rounded-md
                            object-cover
                          "
                        />

                      </td>


                      {/* Title */}

                      <td className="px-4 py-3">

                        <span className="text-[15px]">
                          {post.title}
                        </span>

                      </td>


                      {/* Uploader */}

                      <td className="px-4 py-3">

                        <a
                          href="#"
                          className="
                            text-[15px]
                            text-blue-600
                            underline
                            underline-offset-2
                          "
                        >
                          {post.uploader}
                        </a>

                      </td>


                      {/* Category */}

                      <td className="px-4 py-3">

                        <span
                          className="
                            inline-flex
                            rounded-md
                            bg-gray-200
                            px-2.5
                            py-1
                            text-[13px]
                          "
                        >
                          {post.category}
                        </span>

                      </td>


                      {/* Date */}

                      <td className="px-4 py-3 whitespace-nowrap">

                        <span className="text-[15px]">
                          {post.date}
                        </span>

                      </td>


                      {/* NSFW */}

                      <td className="px-4 py-3">

                        <span
                          className={`
                            inline-flex
                            rounded-md
                            px-2.5
                            py-1
                            text-[13px]
                            ${
                              post.nsfw === "Yes"
                                ? "bg-red-100 text-red-700"
                                : "bg-green-100 text-green-700"
                            }
                          `}
                        >
                          {post.nsfw}
                        </span>

                      </td>


                      {/* Actions */}

                      <td className="px-5 py-3">

                        <div className="flex justify-end gap-5">

                          {/* View */}

                          <button
                            className="
                              flex
                              items-center
                              gap-2
                              text-[15px]
                              text-gray-700
                              transition
                              hover:text-blue-600
                            "
                          >

                            <FiEye size={18} />

                            <span>
                              View
                            </span>

                          </button>


                          {/* Delete */}

                          <button
                            className="
                              flex
                              items-center
                              gap-2
                              text-[15px]
                              text-red-700
                              transition
                              hover:text-red-900
                            "
                          >

                            <FiTrash2 size={18} />

                            <span>
                              Delete
                            </span>

                          </button>

                        </div>

                      </td>

                    </tr>

                  ))}


                  {/* ================= NO RESULTS ================= */}

                  {filteredPosts.length === 0 && (

                    <tr>

                      <td
                        colSpan="7"
                        className="
                          px-6
                          py-12
                          text-center
                          text-gray-500
                        "
                      >
                        No posts found.
                      </td>

                    </tr>

                  )}

                </tbody>

              </table>

            </div>


            {/* ================================================= */}
            {/* ================= PAGINATION ==================== */}
            {/* ================================================= */}

            <div
              className="
                flex
                items-center
                justify-center
                gap-4
                border-t
                border-gray-200
                py-4
                text-[15px]
              "
            >

              <button className="text-gray-500 hover:text-gray-900">
                Previous
              </button>

              <span className="text-gray-400">
                |
              </span>

              <button className="font-semibold text-blue-600">
                1
              </button>

              <button className="hover:text-blue-600">
                2
              </button>

              <button className="hover:text-blue-600">
                3
              </button>

              <span>
                ...
              </span>

              <button className="hover:text-blue-600">
                50
              </button>

              <button className="hover:text-blue-600">
                Next
              </button>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
};


export default AdminAllPosts;