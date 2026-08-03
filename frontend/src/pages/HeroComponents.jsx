
import React, { useState, useEffect } from 'react'
import { FaReact } from "react-icons/fa";
import { FaAnglesDown } from "react-icons/fa6";
import heroImage from "../assets/5cb7852a6cd7a5b4428a74ddecdaa2ae.jpg.jpeg";
import img1 from "../assets/SmartSelect_20260728_223916_Google.jpg";
import img2 from "../assets/SmartSelect_20260728_223916_Google.jpg";
import img3 from "../assets/SmartSelect_20260728_223916_Google.jpg";
import img4 from "../assets/SmartSelect_20260728_223916_Google.jpg";
import img5 from '../assets/d002e257349aa40282691f4fd0ac2c6f.jpg.jpeg'
import img6 from '../assets/WhatsApp Image 2026-07-31 at 7.45.34 PM.jpeg'
import HeroContainer2 from './HeroContainer2';
import {Link} from 'react-router-dom'
import Singularity from './Singularity';

const HeroComponents = () => {

// const cards = [
//   { image: img1, title: "Artist" },
//   { image: img2, title: "Gaming" },
//   { image: img3, title: "Books" },
//   { image: img4, title: "Music" },
// ];
                    
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


//   useEffect(() => {
//   const handleScroll = () => {
//   const scroll = window.scrollY;

//   if (expanded && scroll > 30) {
//     setExpanded(false);
//   }

//   const newBoxHeight = Math.max(80, 320 - scroll * 0.6);
//   setBoxHeight(newBoxHeight);

//   const newSidebarHeight = Math.max(320, 620 - scroll * 0.8);
//   setSidebarHeight(newSidebarHeight);
// };

//   window.addEventListener("scroll", handleScroll);

//   return () => window.removeEventListener("scroll", handleScroll);
// }, [expanded]);



  
  return (
    <div>
       

    
  <div className="flex-1 bg-black">
        


           {/* <div className="sidebarcontainer justify-between w-auto flex z-60">   

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


             </div> */}

        {/* <div className="search bg-black text-white h-12 w-20 text-center rounded-tl-2xl rounded-bl-2xl"></div> */}
        {/* <img src="frontend\src\assets\hero.png" alt="" srcset="" className='h-12 w-20'/> */}   

            <div className="middlecontainer flex flex-col bg-black min-h-400 relative left-51">

    


         <div className="herocontainerdollhole  h-140 bg-black w-auto top-15 relative">



                 <div className="img flex">       

        <img src={heroImage} className=' h-100 w-140 relative top-8 left-10 z-3 shdw rounded-[21px]' alt="" />

                 </div>

                           <div className="p1 relative left-153 bottom-91 ">
                    <h1 className=" shimmer-text gradient-text">Hello Artist🎨</h1>
                    <div className="para bg-black w-94 h-auto"><p className='text-[21px] font-serif text-white'>
                      
                      ✓ Showcase Work: Display your art in high resolution. <br />   <br />
                      
                      ✓ Join Competitions: Compete in contests for rewards. <br /> <br />           

                      ✓ Smart Search: Find art, artists, and contests instantly. <br />

                      </p></div>
                    
                            </div>

                 <div className="bar h-18 w-200  relative left-124  bottom-89 z-2 rounded-3xl bargradient shdw2"></div>


                      <div className="AddingBox bg-black h-34 w-120 left-22 rounded-4xl bottom-85 relative">

                        <button className="explore h-25 w-106 bg-blue-600 border-4 rounded-3xl mt-2 left-2 relative cursor-pointer">
                          
                          
                          <Link to="/explore">

                          <h1 className='text-[35px] font-orbitron'>

                          Explore
                          </h1>

                          </Link> 
                          </button>
                      </div>



                      {/* <div className="singu h-80 w-160 left-60 relative bg-amber-300 ">

                        <Singularity />
                      </div> */}
              





          

        
        
        </div>


        {/* <div className="hercontainer2 flex bg-amber-500 right-50 relative">

         

          <div className="imagecontainer">


            <img src="" alt="" className="h-140 w-1000 relative z-60 shdw"/>


          </div>
        </div> */}

        

        





       
        

             </div>

        
  
             {/* <div
  onClick={() => {
    if (collapsed) {
      setExpanded(true);
    }
  }}
  className={`bg-black w-80 rounded-[60px] mr-1 sticky mt-2 top-7 overflow-hidden transition-all duration-300 z-60 h-30${
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

              </div> */}



      


</div>

    </div>
  )
}

export default HeroComponents
