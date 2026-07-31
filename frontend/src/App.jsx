import React, { useState, useEffect } from 'react'
import { FaReact } from "react-icons/fa";
import { FaAnglesDown } from "react-icons/fa6";
import heroImage from "./assets/5cb7852a6cd7a5b4428a74ddecdaa2ae.jpg.jpeg";
import img1 from "./assets/SmartSelect_20260728_223916_Google.jpg";
import img2 from "./assets/SmartSelect_20260728_223916_Google.jpg";
import img3 from "./assets/SmartSelect_20260728_223916_Google.jpg";
import img4 from "./assets/SmartSelect_20260728_223916_Google.jpg";
import img5 from './assets/d002e257349aa40282691f4fd0ac2c6f.jpg.jpeg'
import HeroComponents from './pages/HeroComponents';

const App = () => {

  





const cards = [
  { image: img1, title: "Artist" },
  { image: img2, title: "Gaming" },
  { image: img3, title: "Books" },
  { image: img4, title: "Music" },
];
                    
const categories = [
  "Technology",
  "Fashion",
  "Books",
  "Gaming",
  "Music"
];

const [open, setOpen] = useState(false);

  const [boxHeight, setBoxHeight] = useState(320);
  
  const [sidebarHeight, setSidebarHeight] = useState(620);

  const [expanded, setExpanded] = useState(false);
  
const collapsed = boxHeight <= 120 && !expanded;

const currentHeight = expanded ? 320 : boxHeight;






  useEffect(() => {
  const handleScroll = () => {
  const scroll = window.scrollY;

  if (expanded && scroll > 30) {
    setExpanded(false);
  }

  const newBoxHeight = Math.max(80, 320 - scroll * 0.6);
  setBoxHeight(newBoxHeight);

  const newSidebarHeight = Math.max(320, 620 - scroll * 0.8);
  setSidebarHeight(newSidebarHeight);
};

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, [expanded]);

  
  



  return (
    <div>

      <div className="maincontainer bg-gray-200 z-0">
          <div className="navbar relative top-0 z-50 h-20 bg-gray-200 flex justify-between">
            <div className="heading text-3xl w-360 h-18 mt-1 bg-gray- shdw2 border rounded-[50px] ml-2">   
             <h1 className='mt-1 text-6xl font-serif text-black ml-22 '>
              Kalantara   
             </h1>
            </div>
           <div className="box-email bg-gray-800 h-18 m-1 w-18 rounded-[100px]"></div>
          </div>




          <div className="content flex">



         

       <div className="sidebarcontainer w-52 shrink-0 flex z-60">

        <div className="side1 flex h-auto">
          <div
                className="slidebar sticky top-3 z-40 bordergradientclass bg-black border-2 w-50 ml-2 mt-2 rounded-4xl shdw transition-all duration-75 overflow-hidden"
                style={{
                  height: `${sidebarHeight}px`,
                }}
              >


          <ul className="flex flex-col ml-3.5 mt-2 gap-1.5">
            <button className="h-12 w-42 bg-blue-200 text-center rounded-[22px] text-[20px] pt-2 font-serif bn31">
              
              <span className='bn31span'>
              Home
              </span>
              
              </button>
            <li className="h-12 w-42 bg-blue-200 text-center rounded-[22px] text-[20px] pt-2 font-serif  bn31"><span className='bn31span'>
              
              Artist
              </span>
              </li>
            <li className="h-12 w-42 bg-blue-200 text-center rounded-[22px] text-[20px] pt-2 font-serif bn31"><span className='bn31span'>
              
              Art-Ratings
              </span>
              </li>
            <li className="h-12 w-42 bg-blue-200 text-center rounded-[22px] text-[20px] pt-2 font-serif bn31"><span className='bn31span'>
              
              About
              </span>
              </li>
            <li className="h-12 w-42 bg-blue-200 text-center rounded-[22px] text-[20px] pt-2 font-serif bn31"><span className='bn31span'>
              
              Contact
              </span>
              </li>
          </ul>
        </div>


        </div>


             </div>

    <div className="middlecontainer flex-1">
        <HeroComponents />
    </div>



        <div
  onClick={() => {
    if (collapsed) {
      setExpanded(true);
    }
  }}
  className={`bg-black shrink-0 w-80 rounded-[60px] mr-1 sticky mt-2 top-7 overflow-hidden transition-all duration-300 z-60 h-30${
    collapsed ? "cursor-pointer" : ""
  }`}
  style={{
    height: `${currentHeight}px`,
  }}
>

  <div
    className={`
      h-full
      transition-all
      duration-300
      ${
        collapsed
          ? "flex items-center justify-evenly"
          : "grid grid-cols-2 place-items-center gap-4 p-5"
      }
    `}
  >

    {cards.map((card,index)=>(
      <div
        key={index}
        className="flex flex-col items-center transition-all duration-300"
      >

        <img
          src={card.image}
          alt={card.title}
          className={`
            object-cover rounded-2xl
            transition-all duration-300
            ${
              collapsed
                ? "w-12 h-12"
                : "w-24 h-24"
            }
          `}
        />

        <span
          className={`
            mt-2 text-white text-sm font-serif
            transition-all duration-300
            ${
              collapsed
                ? "opacity-0 h-0 overflow-hidden"
                : "opacity-100"
            }
          `}
        >
          {card.title}
        </span>

      </div>
    ))}

  </div>

              </div>

 </div>





        



       



      </div>


     
    </div>
  )
}

export default App
