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
import HeroContainer2 from './pages/HeroContainer2';

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
          <div className="navbar relative top-0 z-50 h-20 bg-gray-200 flex justify-between sticky">
            <div className="heading text-3xl w-360 h-18 mt-1 bg-gray- shdw2 border rounded-[50px] ml-2">   
             <h1 className='mt-1 text-6xl font-serif text-black ml-22 '>
              Kalantara   
             </h1>
            </div>
           <div className="box-email bg-gray-800 h-18 m-1 w-18 rounded-[100px]"></div>
          </div>


         <div className="content relative">

  {/* Sidebar — fixed now, not a flex sibling */}
  <div className="sidebarcontainer fixed left-2 top-24 z-100">
    <div className="side1 flex h-auto">
      <div
        className="slidebar bordergradientclass bg-black border-2 w-50 rounded-4xl shdw transition-all duration-75 overflow-hidden"
        style={{ height: `${sidebarHeight}px` }}
      >
        <ul className="flex flex-col ml-3.5 mt-2 gap-1.5">
          <button className="h-12 w-42 bg-blue-200 text-center rounded-[22px] text-[20px] pt-2 font-serif bn31">
            <span className='bn31span'>Home</span>
          </button>
          <li className="h-12 w-42 bg-blue-200 text-center rounded-[22px] text-[20px] pt-2 font-serif bn31"><span className='bn31span'>Artist</span></li>
          <li className="h-12 w-42 bg-blue-200 text-center rounded-[22px] text-[20px] pt-2 font-serif bn31"><span className='bn31span'>Art-Ratings</span></li>
          <li className="h-12 w-42 bg-blue-200 text-center rounded-[22px] text-[20px] pt-2 font-serif bn31"><span className='bn31span'>About</span></li>
          <li className="h-12 w-42 bg-blue-200 text-center rounded-[22px] text-[20px] pt-2 font-serif bn31"><span className='bn31span'>Contact</span></li>
        </ul>
      </div>
    </div>
  </div>


   <div className="inputbarcontainer flex fixed top-3 z-80 py-2 left-50 top-20"> 
  
              <input type="text" className='h-12 w-170 border-1 bg-gray-100 hover:bg-gray-300 transition-colors duration-600 rounded-4xl mt-3 ml-4 pl-3 text-2xl' placeholder='Search Collection...'/>
  
              <div className="relative mt-3 ml-2 ">
  
  
                         <div
                           className="categorybar h-12 w-70 bg-white rounded-4xl border cursor-pointer"
                           onClick={() => setOpen(!open)}
                         >
                           <h1 className="text-[24px] justify-center flex mt-1 font-serif items-center">
                             Browse Categories
         
                               <div
                                 className={`icondown ml-3 transition-transform duration-300 ${
                                   open ? "rotate-180" : ""
                                 }`}
                               >
                                 <FaAnglesDown />
                               </div>
            
                             </h1>
                           </div>
            
            
                           {/* Dropdown */}
                           {open && (
                             <div className="absolute top-14 left-0 w-70 bg-white border rounded-xl shadow-lg z-50">
            
                               {categories.map((category, index) => (
                        <div
                          key={index}
                          className="px-4 py-2 font-serif text-lg hover:bg-gray-200 cursor-pointer"
                        >
                          {category}
                        </div>
                      ))}
            
                    </div>
                  )}
            
            </div>
          </div>

  {/* Middle container — full width, nothing competing for its space now */}
  <div className="middlecontainer w-full">
    <HeroComponents />
    
  </div>

  {/* Right box — fixed now, not a flex sibling */}
  <div
    onClick={() => { if (collapsed) setExpanded(true); }}
    className={`bg-black rounded-[60px] fixed right-2 top-24 z-100 overflow-hidden transition-all duration-300 w-80 ${
      collapsed ? "cursor-pointer" : ""
    }`}
    style={{ height: `${currentHeight}px` }}
  >
    <div className={`h-full transition-all duration-300 ${collapsed ? "flex items-center justify-evenly" : "grid grid-cols-2 place-items-center gap-4 p-5"}`}>
      {cards.map((card, index) => (
        <div key={index} className="flex flex-col items-center transition-all duration-300">
          <img src={card.image} alt={card.title} className={`object-cover rounded-2xl transition-all duration-300 ${collapsed ? "w-12 h-12" : "w-24 h-24"}`} />
          <span className={`mt-2 text-white text-sm font-serif transition-all duration-300 ${collapsed ? "opacity-0 h-0 overflow-hidden" : "opacity-100"}`}>
            {card.title}
          </span>
        </div>
      ))}
    </div>
  </div>

</div>


<HeroContainer2 />


 

      </div>

    </div>
  )
}

export default App
