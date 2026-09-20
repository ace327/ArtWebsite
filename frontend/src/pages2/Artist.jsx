
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Artist = () => {
  const cards = Array.from({ length: 20 });

  // Controls the profile image popup
  const [showProfile, setShowProfile] = useState(false);

  // Stores which image was clicked
  const [selectedImage, setSelectedImage] = useState("");

  // Different image for each artist
  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2jsc9rU98JaocerL_h9KqAEEITMJSYJplq70-j9AIiQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt4xk8W4teRLza_6EDLP8kBTzrJ7Mt2EcSr1QipxsFfa5NpuZmIR2y8pU&s=10",
    "https://i.pinimg.com/736x/3f/1e/8c/3f1e8ca0b834ce29d6ecaf6241a9d3dc.jpg",
    "https://hips.hearstapps.com/hmg-prod/images/chrisevans-gettyimages-478282365-1589806851.jpg?crop=0.891xw:0.593xh;0.100xw,0.131xh&resize=1200:*",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4lfrOoPHrzICbOX2OUfiofkplvvokKcdENZ0lbJFJweyu434zqQ8uL1o&s=10",
    "https://www.musikexpress.de/wp-content/uploads/2024/03/gettyimages-684971186.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzTWOTNwz4UKZtiYV_xuvLTO13pLFLr9v88yvU_NMm7ANXd5FKWnzXrmc&s=10",
    "https://example.com/image8.jpg",
    "https://example.com/image9.jpg",
    "https://example.com/image10.jpg",
    "https://example.com/image11.jpg",
    "https://example.com/image12.jpg",
    "https://example.com/image13.jpg",
    "https://example.com/image14.jpg",
    "https://example.com/image15.jpg",
    "https://example.com/image16.jpg",
    "https://example.com/image17.jpg",
    "https://example.com/image18.jpg",
    "https://example.com/image19.jpg",
    "https://example.com/image20.jpg",
  ];


  const profileNames = [
  "Karan",
  "Arjun",
  "Rahul",
  "Chris",
  "Aarav",
  "Vihaan",
  "Rohan",
  "Aditya",
  "Kabir",
  "Aryan",
  "Dev",
  "Raj",
  "Krish",
  "Ishaan",
  "Aman",
  "Yash",
  "Vivan",
  "Reyansh",
  "Dhruv",
  "Arnav",
];
  // Cards that wrap around the RightBox
  const wrappedCards = cards.slice(0, 7);

  // Remaining cards (full width)
  const remainingCards = cards.slice(7);

  // Open profile image
  const openProfile = (image, e) => {
    e.preventDefault();
    e.stopPropagation();

    setSelectedImage(image);
    setShowProfile(true);
  };

  // Close profile image
  const closeProfile = () => {
    setShowProfile(false);
    setSelectedImage("");
  };

  return (
    <div className="maincontainer">
      <div className="container1 min-h-screen">

        {/* Heading */}
        <div className="barlivecompition h-9 w-400 border-2 bg-gray-200 border-black relative right-2 top-12 mt-7 justify-center flex">
          <h1 className="font-germania text-black text-[25px] mr-20">
            Artist
          </h1>
        </div>

        <div className="boxes left-58 top-10 relative w-378">

          {/* ---------- TOP SECTION ---------- */}

          <div className="flow-root">

            {/* Invisible spacer (same size as RightBox) */}
            <div className="float-right w-[340px] h-[284px]" />

            {wrappedCards.map((_, i) => (
              <Link
                to="/ProfilePage"
                key={i}
                className="float-left h-63 w-77 mt-5 mr-3 mb-3 bg-gray-900 rounded-3xl"
              >

                <div className="h-16 bg-gray-500 rounded-t-3xl flex">

                  {/* PROFILE IMAGE */}
                  <div
                    className="ProfileImage h-19 w-19 rounded-3xl relative top-3 left-3 overflow-hidden cursor-pointer"
                    onClick={(e) => openProfile(images[i], e)}
                  >
                    <img
                      src={images[i]}
                      alt="Artist"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="ProfileName">
                    <h1 className="text-2xl text-white  ml-5 mt-4">{profileNames[i]}</h1>
                  </div>

                </div>

                <div className="Art"></div>

              </Link>
            ))}

          </div>


          {/* ---------- BOTTOM SECTION ---------- */}

          <div className="flex flex-wrap gap-3 mt-3">

            {remainingCards.map((_, i) => (
              <Link
                to="/ProfilePage"
                key={i + 7}
                className="h-63 w-77 bg-gray-900 rounded-3xl"
              >

                <div className="h-16 bg-gray-500 rounded-t-3xl flex">

                  {/* PROFILE IMAGE */}
                  <div
                    className="ProfileImage h-19 w-19 rounded-3xl relative top-3 left-3 overflow-hidden cursor-pointer"
                    onClick={(e) => openProfile(images[i + 7], e)}
                  >
                    <img
                      src={images[i + 7]}
                      alt="Artist"
                      className="w-full h-full object-cover"
                    />
                  </div>









                  



                    <div className="ProfileName">
                    <h1 className="text-2xl text-white  ml-5 mt-4">{profileNames[i]}</h1>
                  </div>


               
                </div>

                <div className="Art"></div>

              </Link>
            ))}

          </div>

        </div>
      </div>


      {/* ================================================= */}
      {/* PROFILE IMAGE POPUP */}
      {/* ================================================= */}

      {showProfile && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md"
          onClick={closeProfile}
        >

          <img
            src={selectedImage}
            className="h-80 w-80 rounded-full object-cover shadow-2xl"
            alt="Profile"
            onClick={(e) => e.stopPropagation()}
          />

        </div>
      )}

    </div>
  );
};

export default Artist;
