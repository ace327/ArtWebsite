import React, { useState } from 'react'
import { PiHeartLight } from "react-icons/pi";
import { IoBookmarksOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { GoHeart } from "react-icons/go";
import { Link } from 'react-router-dom';

const PicturePage = () => {




  const [showPicture, setShowPicture] = useState(false);

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
  return (
    <div>
      <div className="maincontainer h-screen">

        <div className="container1 flex flex-col">


          <div className="picturecontainer h-128 w-378 bg-gray-200">


            <div className="firstboxes h-105  w-242 mt-20 ml-54 bg-gray-300 rounded-3xl flex gap-1"> 


          <div
  className="picturebox h-105 w-150  rounded-3xl "
  onClick={() => setShowPicture(true)}
>
  <img
    src="https://i.pinimg.com/736x/f2/71/61/f271614b55f4c150ca1e1517c6486b2d.jpg"
    className="h-102 mt-1 ml-1 w-147 rounded-3xl cursor-pointer "
    alt="Artwork"
  />
</div>

               
              <div className="discriptionbox h-105 flex-col">
                
                

                <div className="firstbox bg-gray-400 h-67 mt-1 mr-1 w-90 rounded-3xl ">


                </div>


                <div className="secondbox h-13 w-90 rounded-3xl bg-gray-300  mt-2  flex items-center gap-2">


                <div className="likeicon  h-10 w-15 items-center flex ml-2 hover:bg-gray-400 rounded-[100px]">

                  <GoHeart className="h-7 w-7 justify-self-center ml-4 cursor-pointer"/>

                </div>


                <div className="bookmark h-10 w-15 items-center flex  hover:bg-gray-400 rounded-[100px]">

                  <IoBookmarksOutline className="h-7 w-7 justify-self-center ml-4 cursor-pointer"/>
                </div>


                <div className="counts ml-11">

                  <h className="text-2xl font-bree ">Likes - 378</h>
                </div>





                </div>

               <Link to="/ProfilePage">  <div className="profilebox h-19 items-center w-90 bg-black rounded-3xl  rounded-tr-[50px] mr-1 mt-2 flex justify-self-end">


                  
                  <div className="profileimage items-center mt-2 h-17 w-17 rounded-[50px] ml-2">

                    <img className="h-15 w-15 rounded-[50px]" src="https://i.pinimg.com/736x/4d/d5/7e/4dd57ed713eeb8d3f7d18cf58cbe98cd.jpg" alt="" />
                  </div>

                  <div className="profileName">  

                    <h1 className="text-2xl text-white">Elon Musk</h1>
                  </div>


                </div>



                </Link>
                
                </div> 

 
              
            </div>





          </div>


        <div className="MorePicturesContainer h-auto w-326 rounded-3xl ml-56 mt-4 bg-gray-200">

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
   {showPicture && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md"
            onClick={() => setShowPicture(false)}
          >
            <img
              src="https://i.pinimg.com/736x/f2/71/61/f271614b55f4c150ca1e1517c6486b2d.jpg"
              className="h-[75vh] w-[75vw] mt-38 mr-29 rounded-2xl object-contain shadow-2xl"
              alt="Artwork"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}



        </div>
      </div>
    </div>
  )
}

export default PicturePage
