import React, { useState } from 'react'

import { HiChartBar } from "react-icons/hi";
import { HiCollection } from "react-icons/hi";

const ProfilePage = () => {








    const verticalData = [
  {
    id: 1,
    image: "https://i.pinimg.com/736x/7a/fa/79/7afa79d6aad23c0c0703afe35ba49241.jpg",
  },
  {
    id: 2,
    image: "https://i.pinimg.com/736x/e5/10/86/e51086ae3326b6c947ed990ffe3f7a63.jpg",
  },
  {
    id: 3,
    image: "https://i.pinimg.com/736x/c7/9f/7d/c79f7dadfba9c20f980387ea04d6d043.jpg",
  },
  {
    id: 4,
    image: "https://i.pinimg.com/736x/31/ee/f1/31eef1f02754498079d4f261ef4b24fc.jpg",
  },
  {
    id: 5,
    image: "https://i.pinimg.com/1200x/04/d8/41/04d8414864307aea48d5fdbcc6d17416.jpg",
  },
  {
    id: 6,
    image: "https://i.pinimg.com/1200x/4a/22/36/4a2236497d9192087323cbb35837cef4.jpg",
  },
  {
    id: 7,
    image: "https://i.pinimg.com/736x/67/4b/32/674b32de92e8a0ee24d9388651c8f8e4.jpg",
  },
  {
    id: 8,
    image: "https://i.pinimg.com/736x/d4/f4/90/d4f490828e0ef89e1d4f41974ca8a4ae.jpg",
  },
  {
    id: 9,
    image: "https://i.pinimg.com/1200x/2f/e0/83/2fe083af7495f80f48c41fc95fe5395a.jpg",
  },
  {
    id: 10,
    image: "https://i.pinimg.com/736x/e3/ef/ba/e3efba9808f49f3dd22fa1316c002361.jpg",
  },
  {
    id: 11,
    image: "https://i.pinimg.com/1200x/68/fa/55/68fa5519819d43cc74a9686903117f7e.jpg",
  },
  {
    id: 12,
    image: "https://i.pinimg.com/736x/ff/92/fb/ff92fbb8fd2e3902f72f78c31b694718.jpg",
  },
  {
    id: 13,
    image: "https://i.pinimg.com/736x/da/a5/06/daa50693b4d3277b1b0f34ae511a49cf.jpg",
  },
  {
    id: 14,
    image: "https://i.pinimg.com/736x/f6/45/e1/f645e16a5c811678cbd11986ced02610.jpg",
  },
  {
    id: 15,
    image: "https://i.pinimg.com/736x/70/f7/7e/70f77eef65a0fbd660d29bb5fbd4f477.jpg",
  },
  {
    id: 16,
    image: "https://i.pinimg.com/736x/37/06/93/370693ae3746681ea9987b612ea1efcf.jpg",
  },
  {
    id: 17,
    image: "https://i.pinimg.com/736x/68/d9/23/68d9236830486c8571aabc41dd679064.jpg",
  },
  {
    id: 18,
    image: "https://i.pinimg.com/736x/05/0f/fb/050ffb6cad7986d4bf8553f7fc0493c3.jpg",
  },
  {
    id: 19,
    image: "https://i.pinimg.com/736x/87/29/bf/8729bf588410a8e9dd982e63d20f017d.jpg",
  },
  {
    id: 20,
    image: "https://i.pinimg.com/736x/1c/26/c0/1c26c0c65562ec2cbecd83ec5bead46b.jpg",
  },
];
const landscapeData = [
  {
    id: 1,
    image: "https://i.pinimg.com/736x/98/fb/93/98fb93e8153d85e1b38114f4467a46ba.jpg",
  },
  {
    id: 2,
    image: "https://i.pinimg.com/736x/02/4f/68/024f68e306db69b419461dfd283912a6.jpg",
  },
  {
    id: 3,
    image: "https://i.pinimg.com/736x/c1/38/df/c138dfd14b596ab4f80b6da67caf399e.jpg",
  },
  {
    id: 4,
    image: "https://i.pinimg.com/736x/d6/50/58/d6505833d25ed994837497fb5941396c.jpg",
  },
  {
    id: 5,
    image: "https://i.pinimg.com/736x/f6/d4/e2/f6d4e203f3d898b06d92d252ff5512b0.jpg",
  },
  {
    id: 6,
    image: "https://i.pinimg.com/736x/25/a4/b9/25a4b9b431f985dfca6cb5ab72e4c5dd.jpg",
  },
  {
    id: 7,
    image: "https://i.pinimg.com/736x/1e/4d/96/1e4d96acb3bba2c542f9734fdbbfc220.jpg",
  },
  {
    id: 8,
    image: "https://i.pinimg.com/1200x/37/7c/85/377c854a5df3d69bb5c8178fbdcb03fb.jpg",
  },
  {
    id: 9,
    image: "https://i.pinimg.com/736x/0d/36/82/0d3682709dca9f1b2c5ff0856190b8b2.jpg",
  },
  {
    id: 10,
    image: "https://i.pinimg.com/736x/ee/b3/3b/eeb33bd327a71e8a3a257cfcd18a731e.jpg",
  },
  {
    id: 11,
    image: "https://i.pinimg.com/1200x/17/d5/4c/17d54cd412a03bb5718cf7c4985e1a83.jpg",
  },
  {
    id: 12,
    image: "https://i.pinimg.com/1200x/a2/d4/7d/a2d47d559c0eb20b849f206b0db5242c.jpg",
  },
  {
    id: 13,
    image: "https://i.pinimg.com/1200x/b2/71/28/b271280266a26b291333d76e0d2d4b6b.jpg",
  },
];

    // Controls profile picture popup
    const [showProfile, setShowProfile] = useState(false);

    // Controls front image popup
    const [showFrontImage, setShowFrontImage] = useState(false);

    return (

        <div>

            <div className="maincontainer">

                <div className="container1 min-h-screen">

                    <div className="profileContainer bg-gray-200 ml-53 h-125 ">
                        <div className="firstbox mt-21 bg-gray-200 rounded-3xl h-110 w-245 flex gap-2">

                            <div className="profileinfo h-110 w-80 bg-gray-600 rounded-3xl">

                                <div className="info h-18 rounded-3xl flex">

                                    {/* PROFILE PICTURE */}

                                    <div
                                        className="img h-17 w-17 bg-black rounded-4xl mt-3 ml-3 z-2 cursor-pointer"
                                        onClick={() => setShowProfile(true)}
                                    >

                                        <img
                                            src="https://i.pinimg.com/736x/4d/d5/7e/4dd57ed713eeb8d3f7d18cf58cbe98cd.jpg"
                                            className="rounded-4xl h-17 w-17"
                                            alt="Profile"
                                        />

                                    </div>


                                    <div className="followdollholet text-[18px] mt-[22px] text-white z-1 right-4 relative bg-gray-500 shdw2 h-9 w-58 rounded-r-3xl">

                                        <h1 className="ml-6 mt-1 font-josefin">
                                            Suthar Marcus Mewada
                                        </h1>

                                    </div>

                                </div>


                                <div className="flowbox">

                                    <div className="posts mt-2 ml-20 text-[20px] text-white m-2 w-35 rounded-2xl bg-black">

                                        <h1 className="ml-7 relative">
                                            Posts - 99
                                        </h1>

                                    </div>


                                    <div className="foll mt-3 flex gap-7 ml-9 ga bg-gray-500 w-60 rounded-2xl shdw2">

                                        <div className="posts text-[20px] text-white m-2 font-googlesans">

                                            Followers

                                            <br />

                                            <h1 className="ml-8">
                                                20
                                            </h1>

                                        </div>


                                        <div className="posts text-[20px] text-white m-2 font-dela">

                                            Followings

                                            <br />

                                            <h1 className="ml-8">
                                                25
                                            </h1>

                                        </div>

                                    </div>

                                </div>


                                <div className="biobox ml-[10px] mt-4">

                                    <textarea
                                        type="text"
                                        className="wrap-break-word resize-none h-28 w-75 pb-23 pl-2 border scrollbar-thumb-white border-white rounded-2xl text-white"
                                        placeholder="Bio"
                                    />

                                </div>


                                <div className="clickableboxesss ml-1 pt-2 bg-black h-25 w-78 rounded-3xl scrollbar-thumb-white">

                                    <ul className="flex gap-1 overflow-y-scroll h-21 flex-wrap ml-3">

                                        <li className="h-10 w-35 bg-gray-700 rounded-3xl text-[18px] text-center text-white pt-1">
                                            Pencil Art
                                        </li>

                                        <li className="h-10 w-35 bg-gray-700 rounded-3xl text-[18px] text-center text-white pt-1">
                                            Digital Paintings
                                        </li>

                                        <li className="h-10 w-35 bg-gray-700 rounded-3xl text-[18px] text-center text-white pt-1">
                                            Skatch
                                        </li>

                                        <li className="h-10 w-35 bg-gray-700 rounded-3xl text-[18px] text-center text-white pt-1">
                                            Drawings
                                        </li>

                                        <li className="h-10 w-35 bg-gray-700 rounded-3xl text-[18px] text-center text-white pt-1">
                                            Oil Painting
                                        </li>

                                        <li className="h-10 w-35 bg-gray-700 rounded-3xl text-[18px] text-center text-white pt-1">
                                        </li>

                                        <li className="h-10 w-35 bg-gray-700 rounded-3xl text-[18px] text-center text-white pt-1">
                                        </li>

                                        <li className="h-10 w-35 bg-gray-700 rounded-3xl text-[18px] text-center text-white pt-1">
                                        </li>

                                    </ul>

                                </div>

                            </div>


                            {/* FRONT IMAGE */}

                            <div className="profilefrontimage bg-gray-400 h-110 rounded-3xl w-162 items-center">

                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKzXvynRAwR0a8kGc4YCJswFM4ZR7QE-iUHGrXRc7K2uarWKmdgaplz6M&s=10"
                                    className="h-100 w-156 ml-3 rounded-2xl mt-5 cursor-pointer"
                                    alt="Front artwork"
                                    onClick={() => setShowFrontImage(true)}
                                />

                            </div>

                        </div>


                        <div className="patti h-12 w-245 bg-black mt-2 rounded-3xl">

                            <ul className="flex justify-between">

                                <li className="h-12 rounded-4xl text-center pt-3 w-120 text-white   hover:border-2 font-josefin  border-amber-400">
                                    Home
                                </li>

                                {/* <li className="h-12 rounded-2xl text-center pt-2 w-60 text-white hover:border-2 border-amber-400 pl-27">

                                    <HiChartBar className="text-2xl" />

                                </li>

                                <li className="h-12 rounded-2xl text-center pt-2 w-60 text-white hover:border-2 border-amber-400 pl-27">

                                    <HiCollection className="text-2xl" />

                                </li> */}

                                <li className="h-12 rounded-4xl text-center pt-3 w-120 text-white hover:border-2 font-josefin  border-amber-400">
                                    Work Shop
                                </li>

                            </ul>

                        </div>


       



                    </div>


                            <div className="MorePicturesContainer h-auto w-326 rounded-3xl ml-53 mt-2 bg-gray-200">

  {/* FIRST 5 VERTICAL BOXES */}
  <div className="verticles flex gap-4">

    {verticalData.slice(0, 5).map((box) => (

      <div
        key={box.id}
        className="pictureboxverticle h-95 w-58 border rounded-3xl overflow-hidden"
      >

        <img
          src={box.image}
          className="h-full w-full object-cover rounded-3xl"
          alt={`Vertical artwork ${box.id}`}
        />

      </div>

    ))}

  </div>


  {/* FIRST 3 LANDSCAPE BOXES */}
  <div className="landscapes flex gap-4 mt-4">

    {landscapeData.slice(0, 3).map((box) => (

      <div
        key={box.id}
        className="pictureslandscape h-58 w-95 rounded-3xl border overflow-hidden"
      >

        <img
          src={box.image}
          className="h-full w-full object-cover rounded-3xl"
          alt={`Landscape artwork ${box.id}`}
        />

      </div>

    ))}

  </div>


  {/* SECOND 5 VERTICAL BOXES */}
  <div className="verticles flex gap-4 mt-4">

    {verticalData.slice(5, 10).map((box) => (

      <div
        key={box.id}
        className="pictureboxverticle h-95 w-58 border rounded-3xl overflow-hidden"
      >

        <img
          src={box.image}
          className="h-full w-full object-cover rounded-3xl"
          alt={`Vertical artwork ${box.id}`}
        />

      </div>

    ))}

  </div>


  {/* SECOND 3 LANDSCAPE BOXES */}
  <div className="landscapes flex gap-4 mt-4">

    {landscapeData.slice(3, 6).map((box) => (

      <div
        key={box.id}
        className="pictureslandscape h-58 w-95 rounded-3xl border overflow-hidden"
      >

        <img
          src={box.image}
          className="h-full w-full object-cover rounded-3xl"
          alt={`Landscape artwork ${box.id}`}
        />

      </div>

    ))}

  </div>

</div>


                </div>

            </div>


            




            






            {/* PROFILE IMAGE POPUP */}

            {showProfile && (

                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md"
                    onClick={() => setShowProfile(false)}
                >

                    <img
                        src="https://i.pinimg.com/736x/4d/d5/7e/4dd57ed713eeb8d3f7d18cf58cbe98cd.jpg"
                        className="h-80 w-80 rounded-full object-cover shadow-2xl"
                        alt="Profile"
                        onClick={(e) => e.stopPropagation()}
                    />

                </div>

            )}


            {/* FRONT IMAGE POPUP */}

            {showFrontImage && (

                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md"
                    onClick={() => setShowFrontImage(false)}
                >

                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKzXvynRAwR0a8kGc4YCJswFM4ZR7QE-iUHGrXRc7K2uarWKmdgaplz6M&s=10"
                        className="h-[75vh] top-17 right-12 relative w-[75vw] rounded-2xl object-contain shadow-2xl"
                        alt="Front artwork"
                        onClick={(e) => e.stopPropagation()}
                    />

                </div>

            )}

        </div>

    )

}

export default ProfilePage