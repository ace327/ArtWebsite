import React from "react";
import { FiUploadCloud, FiChevronDown } from "react-icons/fi";

const Post = () => {

  return (

    <div>

      <div className="maincontainer">

        <div className="container1">

          <div
            className="
              uploadpostcontainer
              w-[1180px]
              min-h-[690px]
              ml-58
              mt-4
              bg-white
              rounded-2xl
              shadow-lg
              p-5
              flex
              gap-5
                         "
          >

            {/* ================================================= */}
            {/* LEFT SIDE - IMAGE UPLOAD */}
            {/* ================================================= */}

            <div
              className="
                w-1/2
                border
                border-dashed
                border-gray-400
                rounded-xl
                flex
                flex-col
                items-center
                justify-center
                cursor-pointer
                hover:bg-gray-50
                transition
              "
            >

              {/* Upload Icon */}
              <FiUploadCloud
                size={80}
                strokeWidth={1.5}
                className="text-gray-500 mb-5"
              />

              {/* Upload Text */}
              <p className="text-[17px] text-gray-700">
                Click or drag an image here to upload.
              </p>

            </div>


            {/* ================================================= */}
            {/* RIGHT SIDE - ARTWORK INFORMATION */}
            {/* ================================================= */}

            <div
              className="
                w-1/2
                px-1
                flex
                flex-col
              "
            >

              {/* ================= TITLE ================= */}

              <label className="text-[16px] font-medium text-black mb-2">
                Title
              </label>

              <input
                type="text"
                placeholder="Give your artwork a title."
                className="
                  w-full
                  h-[42px]
                  border
                  border-gray-400
                  rounded-lg
                  px-3
                  text-[15px]
                  outline-none
                  shadow-sm
                  focus:border-[#287f96]
                "
              />


              {/* ================= DESCRIPTION ================= */}

              <label className="text-[16px] font-medium text-black mt-4 mb-2">
                Description
              </label>

              <textarea
                placeholder="Describe what this artwork is about."
                rows="3"
                className="
                  w-full
                  h-[88px]
                  border
                  border-gray-400
                  rounded-lg
                  px-3
                  py-3
                  text-[15px]
                  outline-none
                  resize-none
                  shadow-sm
                  focus:border-[#287f96]
                "
              />


              {/* ================= CATEGORY + ORIENTATION ================= */}

              <div className="flex gap-5 mt-4">

                {/* Category */}
                <div className="w-1/2">

                  <label className="block text-[16px] font-medium mb-2">
                    Category
                  </label>

                  <div className="relative">

                    <select
                      className="
                        w-full
                        h-[42px]
                        appearance-none
                        border
                        border-[#287f96]
                        rounded-lg
                        px-3
                        text-[15px]
                        outline-none
                        bg-white
                      "
                    >
                      <option>Flowers</option>
                      <option>Portrait</option>
                      <option>Landscape</option>
                      <option>Abstract</option>
                      <option>Digital Art</option>
                      <option>Photography</option>
                    </select>

                    <FiChevronDown
                      size={18}
                      className="
                        absolute
                        right-3
                        top-3
                        pointer-events-none
                        text-gray-600
                      "
                    />

                  </div>

                </div>


                {/* Orientation */}
                <div className="w-1/2">

                  <label className="block text-[16px] font-medium mb-2">
                    Orientation
                  </label>

                  <div
                    className="
                      w-full
                      h-[42px]
                      bg-gray-300
                      rounded-lg
                      flex
                      items-center
                      p-[3px]
                    "
                  >

                    <button
                      className="
                        w-1/2
                        h-full
                        bg-white
                        rounded-lg
                        shadow-sm
                        text-[15px]
                        text-black
                      "
                    >
                      Portrait
                    </button>

                    <button
                      className="
                        w-1/2
                        h-full
                        rounded-lg
                        text-[15px]
                        text-black
                      "
                    >
                      Landscape
                    </button>

                  </div>

                </div>

              </div>


              {/* ================= TAGS ================= */}

              <label className="text-[16px] font-medium mt-4 mb-2">
                Tags
              </label>

              <div
                className="
                  w-full
                  min-h-[42px]
                  border
                  border-gray-400
                  rounded-lg
                  flex
                  items-center
                  px-3
                  gap-2
                  flex-wrap
                "
              >

                <span className="text-[14px] text-gray-500">
                  Type comma-separated
                </span>

                <span
                  className="
                    bg-gray-200
                    px-2
                    py-1
                    rounded-full
                    text-[13px]
                    text-gray-700
                  "
                >
                  sunset
                </span>

                <span
                  className="
                    bg-gray-200
                    px-2
                    py-1
                    rounded-full
                    text-[13px]
                    text-gray-700
                  "
                >
                  watercolor
                </span>

                <span
                  className="
                    bg-gray-200
                    px-2
                    py-1
                    rounded-full
                    text-[13px]
                    text-gray-700
                  "
                >
                  ocean
                </span>

              </div>


              {/* ================= MEDIUM ================= */}

              <label className="text-[16px] font-medium mt-4 mb-2">
                Medium
              </label>

              <div className="relative">

                <select
                  className="
                    w-full
                    h-[42px]
                    appearance-none
                    border
                    border-gray-400
                    rounded-lg
                    px-3
                    text-[15px]
                    outline-none
                    bg-white
                  "
                >
                  <option>Digital</option>
                  <option>Oil</option>
                  <option>Watercolor</option>
                  <option>Pencil</option>
                  <option>Acrylic</option>
                  <option>Charcoal</option>
                </select>

                <FiChevronDown
                  size={18}
                  className="
                    absolute
                    right-3
                    top-3
                    pointer-events-none
                    text-gray-600
                  "
                />

              </div>


              {/* ================= NSFW ================= */}

              <div className="mt-4">

                <p className="text-[16px] font-medium mb-2">
                  NSFW Content
                </p>

                <div className="flex items-center gap-2">

                  <button
                    className="
                      w-11
                      h-6
                      bg-gray-300
                      rounded-full
                      p-[2px]
                      flex
                      items-center
                    "
                  >
                    <span
                      className="
                        w-5
                        h-5
                        bg-white
                        rounded-full
                        shadow
                      "
                    ></span>
                  </button>

                  <span className="text-[15px]">
                    This artwork contains mature/sensitive content.
                  </span>

                </div>

              </div>


              {/* ================= DOWNLOAD ================= */}

              <div className="mt-4">

                <p className="text-[16px] font-medium mb-2">
                  Allow Download
                </p>

                <div className="flex items-center gap-2">

                  <button
                    className="
                      w-11
                      h-6
                      bg-gray-300
                      rounded-full
                      p-[2px]
                      flex
                      items-center
                    "
                  >
                    <span
                      className="
                        w-5
                        h-5
                        bg-white
                        rounded-full
                        shadow
                      "
                    ></span>
                  </button>

                  <span className="text-[15px]">
                    Allow others to download or reuse this image.
                  </span>

                </div>

              </div>


              {/* ================= UPLOAD BUTTON ================= */}

              <button
                className="
                  w-full
                  h-[42px]
                  mt-5
                  rounded-lg
                  bg-[#28a9d6]
                  text-white
                  text-[16px]
                  shadow
                  hover:bg-[#2199c3]
                  transition
                "
              >
                Upload Artwork
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Post;